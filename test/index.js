//local module
var assert = require('assert')
var objectKeys = require('../')
describe('test', function(){

    it('desc', function(){
        var obj = {foo: 'bar', name: 'objectKeys'}
        var obj1 = [1, 2, 4, 5]

        assert.equal(2, objectKeys(obj).length) 
        assert.equal(4, objectKeys(obj1).length)
    })

    it('throw' , ()=>{
        var obj2 = undefined
        assert.throws(
            objectKeys.bind(null, obj2),
            TypeError
        )
    })

})
