/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
var menus=['豆鼓烤鱼','东坡肘子','水煮鱼','米饭',"果粒橙"];
var makeMenu=function(){
    var str='<ul>';
    menus.forEach(function(menu){
        str+='<li><a href="/'+menu+'">'+menu+'</a></li>';
    })
    str+="</ul>";
    return str;
};

var person=function(request,response){
    var url=request.url;
    console.log(url)
    response.setHeader('Content-Type','text/html;charset=utf-8')
    if(url=="/"){
        response.write(makeMenu())
        response.end()
    }else{
        /*
        if('/豆鼓烤鱼'==decodeURIComponent(url)){
            response.end('客观，你的豆鼓烤鱼来了')
        }else if('/东坡肘子'==decodeURIComponent(url)){
            response.end('客观，你的东坡肘子来了')
        }else if('/水煮鱼'==decodeURIComponent(url)){
            response.end('客观，你的水煮鱼来了')
        }*/
        response.end('客官，一份'+decodeURIComponent(url).slice(1))
    };

}

var server=http.createServer(person);

server.listen('8081','localhost',function(){
    console.log('服务启动');
})