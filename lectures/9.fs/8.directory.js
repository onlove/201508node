/**
 * Created by Administrator on 2016/3/1.
 */
var fs=require('fs');
//创建目录
/*
* d rwx r-x r-x
* r  read       4
* w  write      2
* x  execute;   1
*
* 所有者
* 所有组
* 其它人
* */
//创建目录，必须有父目录
/*fs.mkdir('test',0666,function(err){
    if(err)
        console.log(err)
});*/


//读取些目录下的所有文件和文件夹
//fs.readdir('test',function(err,files){
//    if(err){
//        console.error(err)
//    }else{
//        console.log(files)
//    }
//});

//查看一个文件或目录详情
//fs.stat('test/fiel.txt',function(err,stat){
//    console.log(stat);
//});

//判断文件是否存在
//fs.exists('text/file1',function(exists){
//    console.log(exists)
//})


//从相对路径获取绝对路径
//fs.realpath('test',function(err,realpath){
//    console.log(realpath)
//})

//重命名
//fs.rename('test','test2',function(){
//
//});

//截断文件
//var path='./msg.txt';
//fs.stat(path,function(err,state){
//    console.log(state.size);
//    fs.truncate(path,6,function(err){
//        fs.stat(path,function(err,stat2){
//            console.log(stat2.size)
//        })
//    })
//});

//删除空目录
//fs.rmdir('test',function(err){
//    console.log(err);
//});



//创建目录
function makeP(path){

}