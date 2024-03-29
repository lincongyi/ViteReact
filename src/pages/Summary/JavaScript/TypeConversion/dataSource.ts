export const dataSource = [
  {
    key: 1,
    value: 'undefined',
    string: "'undefined'",
    number: 'NaN',
    boolean: 'false',
    object: '{}',
  },
  {
    key: 2,
    value: 'null',
    string: "'null'",
    number: 0,
    boolean: 'false',
    object: '{}',
  },
  {
    key: 3,
    value: 'true',
    string: "'true'",
    number: 1,
    boolean: '-',
    object: 'new Boolean(true)',
  },
  {
    key: 4,
    value: 'false',
    string: "'false'",
    number: 0,
    boolean: '-',
    object: 'new Boolean(false)',
  },
  {
    key: 5,
    value: "''(空字符串)",
    string: '-',
    number: 0,
    boolean: 'false',
    object: "new String('')",
  },
  {
    key: 6,
    value: "'100'(number类型的字符串)",
    string: '-',
    number: 100,
    boolean: 'true',
    object: "new String('100')",
  },
  {
    key: 7,
    value: "'abc'",
    string: '-',
    number: 'NaN',
    boolean: 'true',
    object: "new String('abc')",
  },
  {
    key: 8,
    value: '0(+0)',
    string: "'0'",
    number: '-',
    boolean: 'false',
    object: 'new Number(0)',
  },
  {
    key: 9,
    value: '-0',
    string: "'0'",
    number: '-',
    boolean: 'false',
    object: 'new Number(-0)',
  },
  {
    key: 10,
    value: 1,
    string: "'1'",
    number: '-',
    boolean: 'true',
    object: 'new Number(1)',
  },
  {
    key: 11,
    value: 'NaN',
    string: "'NaN'",
    number: 'NaN',
    boolean: 'false',
    object: 'new Number(NaN)',
  },
  {
    key: 12,
    value: 'Infinity',
    string: "'Infinity'",
    number: '-',
    boolean: 'true',
    object: 'new Number(Infinity)',
  },
  {
    key: 13,
    value: '-Infinity',
    string: "'-Infinity'",
    number: '-',
    boolean: 'true',
    object: 'new Number(-Infinity)',
  },
  {
    key: 14,
    value: '[]',
    string: "''",
    number: 0,
    boolean: 'true',
    object: 'new Array([])',
  },
  {
    key: 15,
    value: '[100]',
    string: "'100'",
    number: 100,
    boolean: 'true',
    object: '-',
  },
  {
    key: 16,
    value: '[1, 2, 3]',
    string: "'1,2,3'",
    number: 'NaN',
    boolean: 'true',
    object: '-',
  },
  {
    key: 17,
    value: "['4', '5', '6']",
    string: "'4,5,6'",
    number: 'NaN',
    boolean: 'true',
    object: '-',
  },
  {
    key: 18,
    value: 'function(){...}',
    string: "'function(){...}'",
    number: 'NaN',
    boolean: 'true',
    object: 'new Function(...)',
  },
]
