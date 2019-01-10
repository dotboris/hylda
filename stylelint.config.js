module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'no-descending-specificity': null,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'mixin', 'content', 'include', 'if', 'else', 'function', 'each', 'for',
        'return'
      ]
    }]
  }
}
