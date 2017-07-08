import { createStore, combineReducers } from 'redux';
import set from 'lodash.set';
import has from 'lodash.has';

let store = {};
let combine = combineReducers;

const isFunction = target => typeof target === 'function';
const isObject = target => typeof target === 'object';

function combineReducersRecurse(reducers) {
  // If this is a leaf or already combined.
  if (isFunction(reducers)) {
    return reducers;
  }

  // If this is an object of functions, combine reducers.
  if (isObject(reducers)) {
    return combine(
      Object.keys(reducers).reduce(
        (combinedReducers, key) => ({
          ...combinedReducers,
          [key]: combineReducersRecurse(reducers[key])
        }),
        {}
      )
    );
  }

  // If we get here we have an invalid item in the reducer path.
  throw new Error({
    message: 'Invalid item in reducer tree',
    item: reducers
  });
}

export const createInjectStore = (initialReducers, ...args) => {
  // If last item is an object, it is overrides.
  if (isObject(args[args.length - 1])) {
    const overrides = args.pop();
    // Allow overriding the combineReducers function such as with redux-immutable.
    if (
      overrides.combineReducers !== undefined &&
      isFunction(overrides.combineReducers)
    ) {
      combine = overrides.combineReducers;
    }
  }

  store = createStore(combineReducersRecurse(initialReducers), ...args);

  store.injectedReducers = initialReducers;

  return store;
};

export const injectReducer = (key, reducer, force = false) => {
  // If already set, do nothing.
  if (has(store.injectedReducers, key) || force) return;

  set(store.injectedReducers, key, reducer);
  store.replaceReducer(combineReducersRecurse(store.injectedReducers));
};
