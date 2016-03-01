/**
 * 1.创建TCP服务器
 * 2.客户端可以连接进来
 * 3.客户进来之后先设置昵称
 * 4.昵称不能重复
 * 5.接收用户的聊天信息，广播给所有人
 * 6.当用户进入或退出时通知大家
 * 7.每当用户进入的时候显示当前的在线人数
 */

var net=require('net');
var util=require('util');
var clients={}
var server=net.createServer(function(socket){
    var nickname;
    socket.write('欢迎来到聊天室，请设置昵称');
    socket.on('data',function(chunk){
        if(nickname){
            broadcast(nickname+':'+chunk);
        }else{
            //如果此用户名已经被人用了
            if(clients[chunk]){
                socket.write('此用户名已经被人用了')
            }else{
                nickname=chunk;
                clients[chunk]=socket;
                broadcast('SYSTEM:'+chunk+'来到了聊天室');
            }
        }
    })
    socket.on('close',function(){
        delete clients[nickname];
        socket.destroy();
        broadcast('SYSTEM:'+nickname+'永远离开了聊天室')
    });
});

function broadcast(msg){
    for(var name in clients){
        clients[name].write(msg);
    }
}
server.on('error',function(err){
    console.og(err)
})
server.lister(8081)