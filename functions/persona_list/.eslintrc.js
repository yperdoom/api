module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    "node": true,
    "mocha": true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  },
  plugins: [
    'mocha'
  ]
}
