
var objectKeys = require('../')
var log = console.log


var obj = {foo: 'bar', name: 'objectKeys'}
var obj1 = [1, 2, 4, 5]
var obj2 = undefined
log('obj: ', objectKeys(obj))
log('obj1: ', objectKeys(obj1))
log('obj2: ', objectKeys(obj2))
