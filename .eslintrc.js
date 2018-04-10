module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "bracketSpacing": true,
        "jsxBracketSameLine": true
      }
    ],
    "consistent-return": "off",
    "global-require": "off",
    "indent": "off",
    "max-len": [
      "error",
      100,
      4,
      {
        "ignoreUrls": true
      }
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "no-nested-ternary": "off",
    "no-shadow": "off",
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__", "_sagaMiddleware", "_apiRoot"] }],
    "no-confusing-arrow": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/no-unresolved": [2, { ignore: ['^shared'] }],
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": [
      2,
      {
        "forbid": [
          "any",
          "array",
          "object"
        ]
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": "off",
    "react/no-string-refs": 1,
    "react/prop-types": "off"
  }
}
