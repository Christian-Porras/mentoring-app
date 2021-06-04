module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // Prevent single line conditionals.
    curly: ['error', 'all'],
    // Don't require new lines inside braces for import declarations.
    'object-curly-newline': ['error', {
    ImportDeclaration: { consistent: true },
    }],
    // We only use the `.js` file extension.
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }],
    // Allow multiple JSX erxpressions per line. Otherwise text and child
    // components can look weirdly formatted.
    'react/jsx-one-expression-per-line': 'off',
    // https://github.com/airbnb/javascript/issues/1875
    // https://github.com/yannickcr/eslint-plugin-react/issues/1754
    'react/no-did-update-set-state': 'off',
  }
};
