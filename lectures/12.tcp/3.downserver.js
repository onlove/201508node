/**
 * Created by Administrator on 2016/3/1.
 */
var net=require('net');
var fs=require('fs');


net.createServer(function(socket){
    socket.setEncoding("utf8");
    socket.on('data',function(chunk){
        fs.createReadStream(chuck).pipe(socket)
    })
}).listen('8081')