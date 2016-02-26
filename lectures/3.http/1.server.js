/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
//request response;

var person=function(request,response){
    response.write('hello');
    response.end();
}

var server=http.createServer(person);
server.listen('8081','localhost',function(){
   console.log('服务启动');
});