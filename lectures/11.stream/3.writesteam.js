/**
 * Created by Administrator on 2016/3/1.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./write.txt');
for(var i=0;i<100;i++){
    ws.write(i+'')
}



function copy(src,desc){

}

