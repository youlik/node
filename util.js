var util=require('util');
function Person(){
    this.name='byvoid';
    this.toString=function(){
        return this.name
    }
}
util.isArray([])
util.isArray(new Array)
var obj=new Person();
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))