/**
 * Created by Administrator on 2016/2/29.
 */


/*
* 写文件writeFile
* */

var fs=require('fs');
//fs.writeFile('./readfile.txt','第一行',{encoding:"utf8",flag:"a"},function(err){
//    console.log(err);
//});
fs.appendFile('./readfile.txt','第二行',function(err){
    if(err){
        console.log(err);
    }
});