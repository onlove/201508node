/**
 * Created by Administrator on 2016/3/1.
 */
var fs=require('fs');
/*
* current  当前的state
* previous 之前的state
* */
function listener(current,previous){
    if(Date.parse(previous.ctime)==0){
        console.log('文件被创建了')
    }else if(Date.parse(current.ctime)==0){
        console.log('文件删除');
    }else{
        console.log('文件被修改')
    }
}
fs.watchFile('src/index.html',{interval:100},listener)