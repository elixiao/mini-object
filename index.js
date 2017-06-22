const fs = require('fs');

function MiniObject(obj) {
  if (obj instanceof MiniObject) return obj
  let keys = Object.keys(obj), i = 0, len = keys.length, key
  for (; i < len; i++) {
    key = keys[i]
    this[key] = obj[key]
  }
}

const p = MiniObject.prototype

p.replaceKey = function (...args) {
  let a = args[0]
  if (!a) return this
  if (typeof a === 'object') {
    let keys = Object.keys(a), i = 0, len = keys.length, key
    for (; i < len; i++) {
      key = keys[i]
      if (key in this) {
        this[a[key]] = this[key]
        delete this[key]
      }
    }
  }
  if (typeof a === 'function') {
    let keys = Object.keys(this), i = 0, len = keys.length, oldKey, key
    for (; i < len; i++) {
      oldKey = keys[i]
      key = a(oldKey)
      if (key) {
        this[key] = this[oldKey]
        delete this[oldKey]
      }
    }
  }
  let i = 0, len = args.length, oldKey, key
  for (; i < len; i++) {
    if (i % 2) continue
    oldKey = args[i]
    key = args[i + 1]
    if (this.hasOwnProperty(oldKey)) {
      this[key] = this[oldKey]
      delete this[oldKey]
    }
  }
  return this
}

module.exports = function (obj) {
  return new MiniObject(obj);
}
