module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-conditionals', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'react-app',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'new-cap': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-throw-literal': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 0,
    'react/no-danger': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
