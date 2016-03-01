/**
 * Created by Administrator on 2016/3/1.
 */
var fs=require('fs');
var path=require('path');
/*
* normalize 正常 规范 将非标准路径转化为标准路径
* 1) 解析  ，  。。
* 2) 多个/  转成一个/
* 3) windows linus mac 杠 \/
* 4) 如果是斜杠结尾，则保留
* */
//console.log(path.normalize('./../a////b//d//../c//e//'));

/*
* join 将多个参数值字符串结合成一个路径字符串
*
* */
//console.log(path.join(__dirname,'a','b','..','c'));

/*
* resolve
* 1） 以应用程序根目录为起点，根据参数的值解析出一个绝对路径
* 2） .当前目录  ..上级目录
* 3)  普通  字符串代表下一级目录
* 4)  /代表根目录
* 5)  如果没有下一参数 ，返回当前目录
* */
/*
console.log(path.resolve())  //f:\node201508\lectures\10.path
console.log(path.resolve('/a','..','b','msg')) //f:\b\msg
console.log(path.resolve('a','..','b','msg')) //f:\node201508\lectures\10.path\b\msg
*/


/*
* relative  获取两个路径之间的相对路径
* path.relative(form,to)
* 返回的是在第一个路径里，如何用相对路径，去引用第二个路径
* */
//console.log(__dirname);
//console.log(path.relative(__dirname,'b'));
//console.log(path.)

console.log(path.relative('index.html','b/c.js'));

/*
* dirname  获取路径所属目录
* 目录的话返回上一级
*
*
* */
console.log(path.dirname(__dirname));
console.log(path.dirname('path.js'));

/*
* basename 获取一个路径的文件名
* path
* ext
*
* */

console.log(path.basename('a/b/index.js','.js'));

//获取文件的扩展名
console.log(path.extname('a/b/index.js'));

//路径分隔符
console.log(path.sep);

//环境变量分隔符
console.log(path.delimiter);