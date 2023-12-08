module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs/eslint-config'
  ],
  plugins: ['vue'],
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off'
  }
}
