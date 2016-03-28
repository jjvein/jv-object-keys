"use strict"

/* Note that: In ES5: if the argument to this method is not an object, it will cause a TypeError
 *            In ES6: non-object argument will be coerced to an object
 */

// Object.keys('foo');
// ES5: TypeError
// Object.keys('foo');
// ["0", "1", "2"]

var objectKeys = function(o) {
    
    //Here, be sure to pass a Object as parameter.
    if(o != Object(o)) {
        throw new TypeError('Object.keys called on a non-object')
    } 

    if(Object.keys) return Object.keys(o)

    var k, kv=[]
    for (k in o)  {
        if(Object.prototype.hasOwnProperty.call(o, k)) {
            kv.push(k) 
        }
    }

    return kv
}

module.exports = objectKeys

