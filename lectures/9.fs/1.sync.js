/**
 * Created by Administrator on 2016/2/29.
 */
var fs=require('fs');
/*
  node.js中 使用fs实现文件的读写，目录的创建，变化的监控所有的
  方法都有同步和异步两种实现
  Sync 结尾的都是同步方法  方法的返回值
  不带Sync的都是异步方法  回调
 */

var data=fs.readFileSync('./readfile.txt',{encoding:'utf8'})
console.log(data);

fs.readFile('./readfile.txt',{encoding:'utf8'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data)
    }
});