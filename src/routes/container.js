import React from 'react';
import { connectAdvanced } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Routes = ({ r }) => (
  <div>
    <h2>Routes</h2>
    {r}
  </div>
);

const I = ({ routes }) => <div>{routes}</div>;

export const createContainer = ({
  loader = () => () => {},
  loadable: { loading = () => <div>loading</div>, ...loadableOptions } = {}
} = {}) => {
  const selectorFactory = () => (state, ownProps) => {
    const { forPath } = ownProps;
    let routes;
    if (forPath) {
      const routesFor = state.routes.map[forPath];

      if (routesFor && routesFor.routes) {
        const r = (
          <Switch>
            {Object.keys(routesFor.routes).map(path => {
              const { component } = routesFor.routes[path];
              const LoadableComponent = Loadable({
                loader: loader(component),
                loading,
                ...loadableOptions
              });

              return (
                <Route
                  key={`${path}-${component}`}
                  path={path}
                  component={LoadableComponent}
                />
              );
            })}
          </Switch>
        );
        routes = <Routes routesFor={routesFor} r={r} />;
      }
    }
    return { ...ownProps, routes };
  };

  return connectAdvanced(selectorFactory)(I);
};
