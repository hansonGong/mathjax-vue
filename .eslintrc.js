module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    "no-console": "warn",
	"no-debugger": "warn",
	'consistent-return': 'off',
	'dot-location': [
		'error',
		'property'
	],
	'eqeqeq': ['error', 'always'],
	'no-empty-function': [
		'error',
		{
			allow: [
				'functions',
				'arrowFunctions'
			]
		}
	],
	'no-empty-pattern': 'error',
	'no-floating-decimal': 'error',
	'no-lone-blocks': 'error',
	'no-multi-spaces': [
		'error',
		{
			ignoreEOLComments: true,
			exceptions: {
				Property: true,
				BinaryExpression: false,
				VariableDeclarator: true,
				ImportDeclaration: true
			}
		}
	],
	'no-redeclare': 'error',
	'no-return-assign': [
		'error',
		'always'
	],
	'no-return-await': 'error',
	'no-unused-expressions': [
		'error',
		{
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true
		}
	],
	'no-unused-vars': [
		'error',
		{
			vars: 'all',
			args: 'none',
			caughtErrors: 'none',
			ignoreRestSiblings: true
		}
	],
	'array-bracket-spacing': [
		'error',
		'never'
	],
	'block-spacing': [
		'error',
		'always'
	],
	'func-call-spacing': [
		'error',
		'never'
	],
	'no-mixed-spaces-and-tabs': 'error',
	'indent': [
		'error',
		2,
		{
			SwitchCase: 1,
			flatTernaryExpressions: true
		}
	],
	'quotes': [
		'error',
		'single',
		{
			avoidEscape: true,
			allowTemplateLiterals: true
		}
	],
	'space-in-parens': [
		'error',
		'never'
	],
	'space-infix-ops': 'error',
	'spaced-comment': [
		'error',
		'always',
		{
			block: {
				exceptions: [
					'*'
				],
				balanced: true
			}
		}
	],
	'switch-colon-spacing': [
		'error',
		{
			after: true,
			before: false
		}
		],
		'arrow-parens': 'off',
	"@typescript-eslint/ban-ts-comment": "off",
  }
}