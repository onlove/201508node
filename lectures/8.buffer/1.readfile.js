/**
 * Buffer 缓存区 暂时存放在内存里的一段数据
 * JS语言只支持字符串类型，没有二进制
 * 在处理tcp和文件流的时候，必须使用二进制
 * 由一个八位字节元素组成的数组
 */
var fs=require('fs');
fs.readFile('file.txt','utf8',function(err,data){
    console.log(data)
})