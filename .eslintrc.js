module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0, // 箭头函数的箭头前后必须有空格
    // allow async-await
    'generator-star-spacing': 0, // generator 的 * 前面禁止有空格，后面必须有空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0, // 不检测文件末尾有空行
    'no-var': ['error'], // 禁止 var 声明
    'prefer-const': ['error'], // 禁止无用 const
    'semi': ['error', 'always'], // 结尾必须有分号
    'comma-dangle': ['error', 'always'], // 逗号结尾,
    'linebreak-style': 'off', // 关闭换行监测
    'space-before-function-paren': 0,
    'indent': [ // 换行 4个空格
      'error',
      4
    ],
  },
    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
  'object-curly-spacing': [
      'error',
      'always',
      {
          arraysInObjects: true,
          objectsInObjects: false
      }
  ],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }
    ],
}
