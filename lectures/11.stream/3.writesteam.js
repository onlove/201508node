/**
 * Created by Administrator on 2016/3/1.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./write.txt');
for(var i=0;i<100;i++){
    ws.write(i+'')
}



function copy(src,desc){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(desc);

    rs.on('open',function(){
        console.log(文件打开)
    })
    rs.on('data',function(){
        var flag=ws.write();
        if(!flag){
            fs.pause();
        }
    });
    //当写入成功的时候杀触发drain事件
    ws.on('drain',function(){
        fs.remuse();
    })
}


