/**
 * @license See LICENSE file in the project root for full license information.
 * @author Teffen Ellis, et al.
 * @copyright Sister Software. All rights reserved.
 */

/**
 * Header to be inserted at the top of every file.
 */
const filePreamble = `*
 * @copyright Sister Software. All rights reserved.
 * @author Teffen Ellis, et al.
 * @license
 * See LICENSE file in the project root for full license information.
 `

/**
 * Header to be inserted at the top of every file, split into lines.
 */
const filePreambleAsLines = filePreamble.split("\n")

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
	root: true,
	ignorePatterns: ["./packages/*/dist/**/*", "./node_modules/**/*"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "eslint-plugin-tsdoc", "header"],
	settings: {
		react: {
			version: "18.2.0",
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".mts", ".tsx"],
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	env: {
		browser: true,
		node: true,
		worker: true,
	},
	rules: {
		"header/header": [1, "block", filePreambleAsLines, 2],
		"react/prop-types": "off",
		"no-undef": "off",
		"no-extra-semi": "off",
		"@typescript-eslint/no-extra-semi": "off",
		"prefer-const": "warn",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "^_",
				varsIgnorePattern: "logger",
			},
		],
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/ban-ts-comment": [
			"warn",
			{
				"ts-ignore": "allow-with-description",
			},
		],
	},
}
