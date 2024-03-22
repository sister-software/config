/**
 * @license See LICENSE file in the project root for full license information.
 * @author Teffen Ellis, et al.
 * @copyright Sister Software. All rights reserved.
 */

/** @type {import("stylelint").Config} */
const stylelintConfig = {
	extends: ["stylelint-config-standard"],
	ignoreFiles: ["dist/**/*.css", "build/**/*.css"],
	rules: {
		indentation: 2,
		"no-descending-specificity": null,
		"no-invalid-double-slash-comments": null,
		"number-leading-zero": "always",
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		"no-duplicate-selectors": null,
	},
}

export default stylelintConfig
