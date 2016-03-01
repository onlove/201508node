/**
 * Created by Administrator on 2016/2/29.
 */

var fs=require('fs');
function copy(src,dest){
    var buff=new Buffer(8*1024);
    var srcFd=fs.openSync(src,'r');
    var destFd=fs.openSync(dest,'w');

    do{
        var read=fs.readSync(srcFd,buff,0,buff.length);
        fs.writeSync(destFd,buff,0,read);
    }while(read==buff.length)//当讯读满8K的时候，继续续



    fs.closeSync(srcFd);
    fs.closeSync(destFd);
}
copy('read.txt','read2.txt')