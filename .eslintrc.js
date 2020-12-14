module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
    commonjs: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  rules: {
    'no-undef': 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next'
      }
    ],
    'consistent-return': 0,
    'no-invalid-this': 2,
    'no-console': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ]
  }
};
