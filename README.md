# mini-object

> lightweight object wrapper, unleash the power of object

## Install

```bash
npm install mini-object --save
yarn add mini-object
```

## Usage

replace single key:

```javascript
const mo = require('mini-object')

const obj = {
  foo:1,
  baz:true
}

mo(obj).replaceKey('foo', 'bar') // { baz: true, bar: 1 }
```

replace multiple keys:

```javascript
mo(obj).replaceKey('foo', 'bar', 'baz', 'qux') 
mo(obj).replaceKey({
  foo: 'bar',
  baz: 'qux',
})
mo(obj).replaceKey(key => {
  if (key === 'foo') return 'bar'
  if (key === 'baz') return 'qux'
})
// { bar: 1, qux: true }
```

define your own rule:

```javascript
mo(obj).replaceKey(key => 'js_' + key) // { js_foo: 1, js_baz: true }
```

## License

MIT
