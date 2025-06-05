module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended', // Can be noisy, add later if needed
    // 'plugin:import/typescript', // For import plugin with typescript
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'], // Important for some TypeScript rules
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    // 'jsx-a11y',
    // 'import',
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    // 'import/resolver': { // Settings for eslint-plugin-import
    //   typescript: {}, // Enable TypeScript support
    // },
  },
  rules: {
    // Common rules:
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+ new JSX transform
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // Warn instead of error for 'any'
    'no-unused-vars': 'off', // Use @typescript-eslint/no-unused-vars instead
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // Not needed in TypeScript projects
    // Add any project-specific rules or overrides here
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'dist/', 'node_modules/'], // Ignore generated files and node_modules
};
