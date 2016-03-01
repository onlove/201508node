/**
 * 真实读取文件
 * 1.打开一个文件，得到打开一个文件的索引
 *   stdin  stdout  stderr
 *   0      1      2
 * 2.读取文件
 * fd         文件描述
 * buffer     从文件中读到哪个缓存区中
 * offset     向缓存区中定稿的数据时的开始位置
 * length     从文件中读取到多少个字节
 * position   从文件中读取时候的开始位置  字节的位置  这个索引不给，就从文件的当时位置开始读取（上一次读取到的字节数）
 * 3.关闭文件
 * fs.closeSync()||fs.close();
 */

var fs=require("fs");

var fd=fs.openSync('read.txt','r');
console.log(fd);
var buffer=new Buffer(12);
fs.readSync(fd,buffer,0,6,0);//海的
fs.readSync(fd,buffer,6,6);//女儿
console.log(buffer.toString());
fs.closeSync(fd);
var fd2=fs.openSync('read.txt','r');
console.log(fd2)

