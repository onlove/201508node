/**
 * Created by Administrator on 2016/3/1.
 */
var Readable=require('stream').Readable;
var util=require('util');
util.inherits(Counter,Readable);

function Counter(){
    Readable.call(this)
    this._max=10;
    this._pos=1;
}
Counter.prototype._read=function(){
    var i=this._pos++;
    if(i>this._max){
        this.push(null)//push null表示结束,会触发end事件
    }else{
        this.push(new Buffer(i+""))//会触发data事件
    }
}

var counter=new Counter();
//数据从哪来
counter.on('data',function(data){
    console.log(data.toString())
});
counter.on('end',function(){
    console.log('end');
});

//何时结束


