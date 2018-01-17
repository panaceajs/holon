import { createAction } from 'redux-actions';
import {
  MOUNT,
  UNMOUNT,
  REGISTER_SAGAS,
  REGISTER_REDUCERS
} from './action-types';

export const mount = createAction(MOUNT);
export const unmount = createAction(UNMOUNT);
export const registerSagas = createAction(REGISTER_SAGAS);
export const registerReducers = createAction(REGISTER_REDUCERS);
