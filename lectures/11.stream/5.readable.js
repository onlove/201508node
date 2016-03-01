
/**
 * Created by Administrator on 2016/3/1.
 */
var util=require('util');
var EventEmitter=require('events')
util.inherits(Counter,EventEmitter);
//注册了一个新的监听函数

function Counter(){
    EventEmitter.call(this);
    this._max=10;
    this._pos=1;
}
Counter.prototype._read=function(){
    var i=this._pos++;
    if(i>this._max){
        return null
        //this.push(null)//push null表示结束,会触发end事件
    }else{
        return i+"";
        //this.push(new Buffer(i+""))//会触发data事件
    }
};


//先开始注册监听-> 安排异步任务（当所有的监听,完成后执行)->再执行异步任务
var counter=new Counter();
counter.on('newListener',function(event){
    if(event=="data"){
        var self=this
        process.nextTick(function(){
            var result=null
            do{
                result=self._read();
                if(result){
                    self.emit('data',result);
                }else{
                    self.emit('end')
                }
            }while(result!=null)
        })

    }
});
//数据从哪来
counter.on('data',function(data){
    console.log(data.toString())
});
counter.on('end',function(){
    console.log('end');
});

//何时结束


