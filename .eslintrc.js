module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/forbid-prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
