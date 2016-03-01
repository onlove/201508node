/**
 * tcp 传输控制协议，是一个可靠的面向连接传输层协议 udp
 * 1.让数据从一台计算机传到另一个计算机
 * 2.内置机制保证丢包率不太高，还可以控制速度
 * 3.对字符编码完全无知
 * 4.传输前要经过三次握手，才能发射数据
 * 5.当会话过程中，双方都提供一个套接字 socket ，实现 客户端和服务端面连接
 * socket可读可写流
 */

var net=require('net');
var server=net.createServer(function(socket){
    console.log(socket.address());
    socket.on('data',function(chunk){
        console.log(chunk);
        socket.write('dd'+chunk)
    });
    socket.on('end',function(){
        console.log('end')
    });
    socket.on('close',function(){
        console.log('close');
        socket.destroy()//销毁socket
    })
});
server.listen(8081,'0.0.0.0',function(){
    console.log("started");
})
