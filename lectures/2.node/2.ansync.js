/**
 * Created by Administrator on 2016/2/26.
 */
var fs=require('fs');
/*
console.log('a');
fs.readFile('1.callback.js','utf8',function(err,data){
    console.log(data);
})

console.log('b');
*/
var count=0;
fs.readFile('./fish','utf8',function(err,data){
    console.log('fish');
    if(++count==2){
        eat();
    }
})
fs.readFile('./salt','utf8',function(err,data){
    console.log('salt');
    if(++count==2){
        eat();
    }
})
function eat(){
    console.log("fish+salt")
}
