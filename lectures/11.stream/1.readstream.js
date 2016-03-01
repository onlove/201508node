/**
 * 1.readfile writefile 做为一个整体
 * 2.read write
 * 3.有些时候，我们只注意是否有数据，以及有数据的进修如何处理？流
 * 4.流是一组有序的，而且有起点和终点的数据存储
 * 网络中传输数据的，先将数据 转成二进制的字节数据,再经过网络 传输到达服务端，
 * 服务端再转成对应的文件
 */


/*
* 流的分类：可读流，可写流
* 可读流:可以从中读出字节内容
* 可写流：可以把字节写入流中
* */

var fs=require('fs');
var rs=fs.createReadStream('./128k.txt');

rs.on('open',function(){
    console.log('文件打开')
})
rs.setEncoding('utf8') //设置编码
//只有当监听data事情之后，开始真正读取数据
rs.on('data',function(data){
    rs.pause();//暂停流的发射事件
    console.log('next');
    setTimeout(function(){
        console.log('over');
        rs.resume()//重新开始恢复读取 打开文件
    },1000)
});
rs.on('end',function(){
    console.log('文件内容读取完毕');
});
rs.on('close',function(){
    console.log('文件关闭')
});
rs.on('error',function(err){
    console.log(err);
});
