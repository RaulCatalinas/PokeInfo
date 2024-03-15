module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['solid'],
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:solid/typescript'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
    '@typescript-eslint/space-before-function-paren': 'off'
  }
}
