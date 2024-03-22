/**
 * ESLint configuration for Sister Software projects.
 *
 * @license MIT
 * @author Teffen Ellis, et al.
 * @copyright Sister Software. All rights reserved.
 */

// @ts-check

import eslint from "@eslint/js"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,

	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			...reactPlugin.configs["jsx-runtime"].rules,
			"react/display-name": "off",
			"react/jsx-curly-brace-presence": "error",
			"react/jsx-no-leaked-render": "error",
			"react/function-component-definition": [
				"error",
				{
					namedComponents: "arrow-function",
					unnamedComponents: "arrow-function",
				},
			],
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	{
		plugins: {
			"react-hooks": hooksPlugin,
		},
		rules: hooksPlugin.configs.recommended.rules,
	},
	{
		ignores: [
			// ---
			"./packages/*/dist/**/*",
			"./dist/**/*",
			"./node_modules/**/*",
		],

		rules: {
			...hooksPlugin.configs.recommended.rules,
			"@typescript-eslint/ban-ts-comment": [
				"warn",
				{
					"ts-ignore": "allow-with-description",
				},
			],
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-extra-semi": "off",
			"@typescript-eslint/no-misused-new": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-shadow": [
				"warn",
				{
					ignoreFunctionTypeParameterNameValueShadow: true,
					ignoreTypeValueShadow: true,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_",
					varsIgnorePattern: "logger",
				},
			],
			"@typescript-eslint/no-var-requires": "off",

			eqeqeq: ["error", "always", { null: "ignore" }],
			"no-shadow": "off",
			"no-extra-semi": "off",
			"no-undef": "off",
			"no-unused-vars": "off",
			"object-shorthand": [
				"warn",
				"always",
				{
					avoidQuotes: true,
					ignoreConstructors: true,
					avoidExplicitReturnArrows: false,
				},
			],
			"prefer-const": "warn",
		},
	}
)
