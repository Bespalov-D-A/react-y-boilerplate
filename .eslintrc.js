module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect' // Автоматическое определение версии React
    }
  },

  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json']
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    'space-in-parens': ['error', 'never'],
    // Используйте === вместо == (строгое равенство)
    eqeqeq: ['error', 'always'],
    // Запрет изменения параметров функций
    'no-param-reassign': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/strict-boolean-expressions': [
      'off',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableEnum: true,
        allowAny: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
      }
    ]
  }
}
