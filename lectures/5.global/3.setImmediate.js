/**
 * setImmediate和nextTick都是在下一个循环当中调用
 * 但nextTick优先级高
 * nextTic>setImmediate>io
 */

var fs=require('fs');

process.nextTick(function(){
    console.log('next tick1')
})
process.nextTick(function(){
    console.log('next tick2')
});


fs.readFile('1.txt','utf8',function(err,data){
    console.log(data);
});
/*
var data=fs.readFileSync('1.txt','utf8');
console.log(data);
*/

/*
* 非阻塞    异步(主线程)
* 阻塞      同步(主线程)
* */

setImmediate(function(){
    console.log('setImmediate1');
    process.nextTick(function(){
        console.log('next tick3')
    });
    setImmediate(function(){
        console.log('setImmediate2');
    });
})
/*
* 结果
* next tick1
* next tick2
* setImmediate1
* setImmediate2
* next tick3
* ds
* */