/**
 * @copyright Sister Software. All rights reserved.
 * @author Teffen Ellis, et al.
 * @license
 * See LICENSE file in the project root for full license information.
 */

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['dist/**/*.css', 'build/**/*.css'],
  rules: {
    indentation: 2,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'number-leading-zero': 'always',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'no-duplicate-selectors': null,
  },
}
