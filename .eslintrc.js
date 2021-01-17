module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': ['error', {
    'html': {
    'void': 'always'
    }
  }],
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
  'space-before-function-paren': ['error', {
  'anonymous': 'never',
  'named': 'never',
  'asyncArrow': 'always'
  }]
  }
}
