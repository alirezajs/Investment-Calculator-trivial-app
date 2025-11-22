module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    // React 17+ with new JSX transform doesn't require React in scope
    'react/react-in-jsx-scope': 'off',
    // Turn off prop-types rule for this project (using TypeScript or other validation may be preferred)
    'react/prop-types': 'off',
    // Use Prettier for code style
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};