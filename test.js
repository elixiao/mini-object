const mo = require('./index')
const log = console.log

const obj = {
    foo:1,
    baz:true
}

log(mo(obj).replaceKey('foo', 'bar'))
log(mo(obj).replaceKey('foo', 'bar', 'baz', 'qux'))

log(mo(obj).replaceKey({
    foo: 'bar',
    baz: 'qux',
}))

log(mo(obj).replaceKey(key => {
    if (key === 'foo') return 'bar'
    if (key === 'baz') return 'qux'
}))


log(mo(obj).replaceKey(key => 'js_' + key))
