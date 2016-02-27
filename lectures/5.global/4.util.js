/**
 * Created by Administrator on 2016/2/27.
 */

var util=require('util');
function Parent(name,age){
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log('hello',this.name);
    }
}

function Child(name,age){
    Parent.apply(this,arguments)
    this.name=name;
}
util.inherits(Child,Parent);

//Child.prototype=new Parent();
var child=new Child('child',6);
console.log(child.name);
console.log(child.age);
child.say();
console.log("==========================================")

function Person(){
    this.name="person";
    this.child={
        name:"child",
        grandson:{
            name:"gradson"
        }
    }
    this.toString=function(){
        return this.name;
    }
}

var p=new Person();
console.log(util.inspect(p,{showHidden:true,depth:1}));
console.log(util.isArray([])); //是否是一个数组
console.log(util.isRegExp(/\d/));//是否是一个正则
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));