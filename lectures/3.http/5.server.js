/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var mime=require('mime'); //工具，实现文件类型和内容类型的转换

var menus=[
    {name:'豆鼓烤鱼',unit:"条"},
    {name:'东坡肘子',unit:"只"},
    {name:'水煮鱼',unit:"盘"},
    {name:'米饭',unit:"碗"},
    {name:"果粒橙",unit:'瓶'}
];
var makeMenu=function(){
    var str='<ul>';
    menus.map(function(menu){
        str+='<li><a href="/mu/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>';
    })
    str+='</ul>';
    return str;
}

var person=function(request,response){
    var urlObj=url.parse(decodeURIComponent(request.url),true);
    if(urlObj.pathname=='/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        var content=fs.readFileSync('menu.html','utf8');
        content=content.replace('@@@@@@',makeMenu());
        response.end(content);
    }else if(urlObj.pathname.indexOf('/mu')==0){
        console.log(urlObj)
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.end('客官，一'+urlObj.query.unit+urlObj.pathname.slice(4));
    }else if(urlObj.pathname=='/clock'){
        response.end(new Date().toGMTString());
    }else{
        var filename=urlObj.pathname.slice(1);
        response.setHeader('Content-Type',mime.lookup(filename));
        var content=fs.readFileSync(filename,'utf8');
        response.end(content);
    }
}



var server=http.createServer(person);

server.listen('8081','localhost',function(){
    console.log('服务器启动')
})