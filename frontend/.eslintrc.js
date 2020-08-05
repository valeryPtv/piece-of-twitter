module.exports = {
  'extends': ['airbnb', 'plugin:react/recommended'],
  'env': {
    'node': true,
    'es6': true
  },
  'rules': {
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/state-in-constructor': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    "comma-dangle": ["error", "never"],
    // 'quotes': [2, 'single', 'avoid-escape'],
    'experimentalDecorators': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 1,
    'no-use-before-define': [
      'error',
      { 'functions': true, 'classes': true, 'variables': false }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx']
      }
    ]
    // 'prettier/prettier': [
    //   'error',
    //   { 'singleQuote': true }
    // ]
  },
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src']
      },
      // alias: [
      //   ['@', './'],
      //   ['~', './']
      // ]
    }
  },
  'parser': 'babel-eslint'
}

/*
module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  'env': {
    'node': true,
    'es6': true
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    // 'import/no-extraneous-dependencies': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { 'props': false }],
    'max-len': ['error', { 'code': 120, 'ignoreStrings': true, 'ignoreUrls': true, 'ignoreComments': true, 'ignoreTemplateLiterals': true }],
    'import/no-extraneous-dependencies': context => [
      'error',
      {
        devDependencies: true,
        packageDir: [context.getFilename(), __dirname]
      }
    ],
    'experimentalDecorators': true,
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 1,
    'no-use-before-define': [
      'error',
      { 'functions': true, 'classes': true, 'variables': false }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'printWidth': 100
      }
    ]
  },
  plugins: ['prettier'],
  parser: 'babel-eslint',
  settings: {
    'import/core-modules': ['vue'],
    'npm /resolver': {
      alias: [
        ['@', './'],
        ['~', './']
      ]
    }
  }
}
 */