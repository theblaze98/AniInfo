module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{
				allowConstantExport: true,
			},
		],
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'no-tabs': 'off',
		'typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-console': 'error',
	},
}
