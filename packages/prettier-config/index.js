/**
 * @license See LICENSE file in the project root for full license information.
 * @author Teffen Ellis, et al.
 * @copyright Sister Software. All rights reserved.
 */

/**
 * Sister Software Prettier configuration.
 *
 * @type {import("prettier").Config & import("prettier-plugin-jsdoc").Options}
 * @internal
 */
const prettierConfig = {
	bracketSpacing: true,
	jsdocCommentLineStrategy: "keep",
	jsdocPreferCodeFences: true,
	jsdocPrintWidth: 100,
	jsdocSeparateReturnsFromParam: true,
	jsdocVerticalAlignment: true,
	printWidth: 120,
	semi: false,
	tabWidth: 2,
	trailingComma: "es5",
	tsdoc: true,
	useTabs: true,
	plugins: [
		// ---
		"prettier-plugin-organize-imports",
		"prettier-plugin-packagejson",
		"prettier-plugin-jsdoc",
	],
	overrides: [
		{
			files: "tsconfig.json",
			options: {
				trailingComma: "none",
			},
		},
	],
}

export default prettierConfig
