export const parseRoutes = (tree = {}) =>
  Object.keys(tree).reduce((currentMap, path) => {
    const { component, routes } = tree[path];
    let resultMap = { ...currentMap, [path]: { component } };
    if (routes) {
      resultMap = {
        ...resultMap,
        [path]: { ...resultMap[path], routes },
        ...parseRoutes(routes)
      };
    }
    return resultMap;
  }, {});

export const createRoutesReducer = (tree = {}) => (
  state = { tree, map: parseRoutes(tree) }
) => state;
