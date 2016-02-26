/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
//request response;

var person=function(request,response){
    //response.write('hello');
    //setTimeout(function(){
    //    response.write('world');
    //    response.end();
    //},5000);
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode=404;
    response.setHeader('name','xxx');
    response.write('hello');
    response.end();
}

var server=http.createServer(person);
server.listen('8081','localhost',function(){
   console.log('服务启动');
});