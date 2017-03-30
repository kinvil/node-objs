# node-objs
A light weight module to deal with js object.

[![Build Status](https://travis-ci.org/kinvil/node-objs.svg?branch=master)](https://travis-ci.org/kinvil/node-objs)
[![Coverage Status](https://coveralls.io/repos/github/kinvil/node-objs/badge.svg?branch=master)](https://coveralls.io/github/kinvil/node-objs?branch=master)


## install
```
npm install node-objs --save
```

## example

```
import { clone, isEqual } from 'node-objs'

const obj = { foo: 'bar' }
const newObj = clone(obj)
console.log(newObj) // { foo: 'bar' }
obj === newObj // false
isEqual(obj, newObj) // true

obj.foo = 'text' // { foo: 'text' }
console.log(newObj) // { foo: 'bar' }
isEqual(obj, newObj) // false
```
