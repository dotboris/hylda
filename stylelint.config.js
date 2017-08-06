module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'content', 'include', 'if', 'else', 'function']
    }]
  }
}
