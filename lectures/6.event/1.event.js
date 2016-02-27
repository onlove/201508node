/**
 * 事件
 * 发布订阅模式
 * 观察者模式
 * 当主题对象在发生变化时，会通知所有的观察者对象更新自己的行动
 */
//var EventEmitter=require('events').EventEmitter();
var EventEmitter=require('events');
var util=require('util');


util.inherits(Girl,EventEmitter);

function Girl(){

}

var girl=new Girl();

function Boy(name,response){
    this.name=name;
    this.response=response;
}
var b1=new Boy('备胎1',function(){
    console.log('送鸡腿')
});
var b2=new Boy('备胎2',function(){
    console.log('送东坡肘子')
});
var b3=new Boy('备胎3',function(){
    console.log('送鱼')
})

girl.addListener('饿了吗',b1.response);
girl.on('饿了吗',b2.response);

girl.emit('饿了吗');//发射事件

//once 只触发一次，触发一次之后再也不触发了
girl.once('die',function(){
    console.log('die')
});
girl.emit('die');
girl.emit('die');

girl.setMaxListeners(2)//设置最大的监听数量
//girl.addListener('饿了吗',b3.response);
console.log("=========================")
girl.removeListener('饿了吗',b2.response); //去掉指定的监听
girl.emit('饿了吗');

console.log("=========================")
girl.removeAllListeners('饿了吗');
girl.emit('饿了吗');