import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const external = [
  'react',
  'redux',
  'react-redux',
  'lodash.has',
  'lodash.set',
  '@hocs/with-lifecycle'
];
export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external,
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: [
      { file: 'index.js', format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/redux-injector.js',
    external,
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: [
      { file: 'redux-injector/index.js', format: 'cjs' },
      { file: 'redux-injector/index.esm.js', format: 'es' }
    ]
  },
  {
    input: 'src/hoc/index.js',
    external,
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: [
      { file: 'hoc/index.js', format: 'cjs' },
      { file: 'hoc/index.esm.js', format: 'es' }
    ]
  }
];
