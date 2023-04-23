module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'prettier', // disables rules that conflict with prettier
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore',
      },
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'no-unused-vars': 'off', // disable because @typescript-eslint/no-unused-vars does the job
    'no-redeclare': 'off', // disable because @typescript-eslint/no-redeclare does the job
    '@typescript-eslint/no-redeclare': 'off', // disable because it also complains in types
    '@typescript-eslint/no-unused-vars': 2,
    'no-undef': 0,
    'no-extra-parens': 0, // disable unnecessary parentheses
    'no-import-assign': 2, // disallow assigning to imported bindings
    'no-useless-escape': 0, // disable error on unnecessary escape usage in regex
    'no-unreachable': 0,
    'no-dupe-class-members': 0,
    'require-atomic-updates': 0,
    'no-inner-declarations': 0,
  },
}
