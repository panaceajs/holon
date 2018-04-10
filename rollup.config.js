import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = [
  'react',
  'redux',
  'react-redux',
  'react-router-dom',
  'react-loadable',
  'lodash.has',
  'lodash.set',
  '@hocs/with-lifecycle'
];
const babelPlugin = babel({
  exclude: 'node_modules/**'
});
const resolvePlugin = resolve({
  jsnext: true,
  browser: true,
  extensions: ['.js', '.json'],
  modulesOnly: true
});
export default [
  {
    input: 'src/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'index.js', format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/redux-injector.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'redux-injector/index.js', format: 'cjs' },
      { file: 'redux-injector/index.esm.js', format: 'es' }
    ]
  },
  {
    input: 'src/routes/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'routes/index.js', format: 'cjs' },
      { file: 'routes/index.esm.js', format: 'es' }
    ]
  },
  {
    input: 'src/hoc/index.js',
    external,
    plugins: [resolvePlugin, babelPlugin],
    output: [
      { file: 'hoc/index.js', format: 'cjs' },
      { file: 'hoc/index.esm.js', format: 'es' }
    ]
  }
];
