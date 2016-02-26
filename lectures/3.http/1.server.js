/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
/*
*   request    请求对象
*   response   响应对象
* */
var menus=['豆鼓烤鱼','东坡肘子','水煮鱼'];
var makeMenu=function(){
    var str='<ul>';
    menus.forEach(function(menu){
        str+='<li>'+menu+'</li>';
    })
    str+="</ul>"
}
var person=function(request,response){
    //response.write('hello');
    //setTimeout(function(){
    //    response.write('world');
    //    response.end();
    //},5000);

    /*
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode=404;
    response.setHeader('name','xxx');
    response.write('hello');
    response.end();*/
    var url=request.url;
    if(url=='/'){
        response.end(makeMenu)
    }
}

var server=http.createServer(person);
server.listen('8081','localhost',function(){
   console.log('服务启动');
});