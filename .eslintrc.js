module.exports = {
  root: true,
  extends: ['eslint:recommended'],
	env: {
    browser: true,
    node: true,
    es6: true,
    worker: true
  },
  parserOptions: {
    sourceType: 'module'
	},
  rules: {
    "no-console": "warn",
		"no-debugger": "warn",
		// 禁止函数在不同分支返回不同类型的值
		'consistent-return': 'off',
		// @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
		'dot-location': [
			'error',
			'property'
		],
		// @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
		'eqeqeq': ['error', 'always'],
		// 不允许有空函数，除非是将一个空函数设置为某个项的默认值
		'no-empty-function': [
			'error',
			{
				allow: [
					'functions',
					'arrowFunctions'
				]
			}
		],
		// 禁止解构中出现空 {} 或 []
		'no-empty-pattern': 'error',
		// switch 的 case 内必须有 break, return 或 throw
		'no-fallthrough': 'error',
		// @fixable 表示小数时，禁止省略 0，比如 .5
		'no-floating-decimal': 'error',
		// 禁止使用没必要的 {} 作为代码块
		'no-lone-blocks': 'error',
		// @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
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
		// 禁止重复定义变量
		'no-redeclare': 'error',
		// 禁止在 return 语句里赋值
		'no-return-assign': [
			'error',
			'always'
		],
		// 禁止在 return 语句里使用 await
		'no-return-await': 'error',
		// 禁止无用的表达式
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}
		],
		// 禁止注释中出现 TODO 和 FIXME
		'no-warning-comments': 'off',
		// async 函数中必须存在 await 语句
		'require-await': 'off',
		// 这些规则与变量申明有关
		"no-var": "error",
		// 变量必须在定义的时候赋值
		'init-declarations': 'off',
		// 禁止变量名与上层作用域内的定义过的变量重复
		'no-shadow': 'error',
		// 禁止使用保留字作为变量名
		'no-shadow-restricted-names': 'error',
		// 定义过的变量必须使用
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'none',
				caughtErrors: 'none',
				ignoreRestSiblings: true
			}
		],
		// 这些规则与代码风格有关，所以是非常主观的
		// @fixable 数组的括号内的前后禁止有空格
		'array-bracket-spacing': [
			'error',
			'never'
		],
		// @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
		'block-spacing': [
			'error',
			'always'
		],
		// @fixable 函数名和执行它的括号之间禁止有空格
		'func-call-spacing': [
			'error',
			'never'
		],
		// 禁止混用空格和缩进
		'no-mixed-spaces-and-tabs': 'error',
		// @fixable 一个缩进必须用两个空格替代
		'indent': [
			'error',
			2,
			{
				SwitchCase: 1,
				flatTernaryExpressions: true
			}
		],
		// @fixable 必须使用单引号，禁止使用双引号
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		// @fixable 小括号内的首尾禁止有空格
		'space-in-parens': [
			'error',
			'never'
		],
		// @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
		'space-infix-ops': 'error',
		// @fixable 注释的斜线或 * 后必须有空格
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
		// @fixable case 的冒号前禁止有空格，冒号后必须有空格
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
			],
			// @fixable 箭头函数只有一个参数的时候，必须加括号
			'arrow-parens': 'off',
		"@typescript-eslint/ban-ts-comment": "off",
  }
}