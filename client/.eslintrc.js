module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['react-app', 'prettier', 'prettier/react'],
  parserOptions: {
    // ecmaFeatures: {
    // 	jsx: true,
    // },
    ecmaVersion: 11,
    // sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
  },
}
