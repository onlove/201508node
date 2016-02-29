/**
 * Created by Administrator on 2016/2/29.
 */
var fs=require('fs');
fs.readFile('./readfile.txt',{encoding:'utf8',flag:'r'},function(err,data){
    console.log(data)
});
/*
* O_RDONLY  只读
* O_SYNC    同步
* O_RDWR    可读可写
* O_TRUNC   截断
* O_CREAT   创建文件
* O_WRONLY  只写
* O_EXCL    排它
*/


