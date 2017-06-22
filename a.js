const mo = require('./index')
const log = console.log

const obj = {
  foo:1,
  baz:true
}

mo(obj).replaceKey('foo', 'bar')
mo(obj).replaceKey('foo', 'bar', 'baz', 'qux')

mo(obj).replaceKey({
  foo: 'bar',
  baz: 'qux',
})

mo(obj).replaceKey(key => {
  if (key === 'foo') return 'bar'
  if (key === 'baz') return 'qux'
})


mo(obj).replaceKey(key => 'js_' + key)
