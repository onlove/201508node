/**
 * 1.打开文件
 * 2.写文件
 * fd
 * buffer    buffer对象
 * offset    从缓存区哪个位置开始读
 * length    多少字节
 * position  写入文件的起始位置
 * callback
 * 3.关闭文件
 */

var fs=require('fs');
fs.open('./msg.txt','w',function(err,fd){
    console.log(fd);
    var buffer=new Buffer('海的女儿')
    fs.write(fd,buffer,6,6,0,function(err,byteWritten,buff){
        console.log('成功写入'+byteWritten+'字节');
        fs.write(fd,buffer,0,6,6,function(err,byteWritten,buff){
            console.log('成功写入'+byteWritten+'字节')
        })
    })
});
