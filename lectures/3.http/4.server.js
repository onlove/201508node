/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var mime=require('mime');  //工具，实现文件类型和内容类型的转换

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
        str+='<li><a href="/menu/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>'
    })
    str+='</ul>';
    return str;
}


var person=function(request,response){
    var urlObj=url.parse(decodeURIComponent(request.url),true);

   if(urlObj.pathname=='/'){
        //1.读取文件
        //2.替换字符串再响应回去
        response.setHeader('Content-Type','text/html;charset=utf-8');
        var content=fs.readFileSync('menu.html','utf8');
        content=content.replace('@@@@@@',makeMenu());
        console.log(content)
        response.end(content);
    }else if(urlObj.pathname.indexOf('/menu')==0){
       response.end('客官,一'+urlObj.query.unit+urlObj.pathname.slice(1));
    }else{
        response.setHeader('Content-Type',mime.lookup('style.css'));
        var content=fs.readFileSync('style.css','utf8');
        response.end(content);
    }
}

var server=http.createServer(person);


server.listen('8081','localhost',function(){
    console.log('服务器启动')
})