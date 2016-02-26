/**
 * Created by Administrator on 2016/2/26.
 */
var http=require('http');
var url=require('url');

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
        str+='<li><a href="/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>'
    })
    str+='</ul>';
    return str;
}
var person=function(request,response){
    var urlObj=url.parse(decodeURIComponent(request.url),true); //true表示把查询字符串转成对象
    console.log(urlObj);
    response.setHeader('Content-Type','text/html;charset=utf-8')
    if(urlObj.pathname=="/"){
        response.end(makeMenu())
    }else{
        response.end('客官,一'+urlObj.query.unit+urlObj.pathname.slice(1))
    }
}

var server=http.createServer(person);

server.listen('8081','localhost',function(){
    console.log('服务器启动')
})

/*
* search:    '?unit=ping'          查询字符串
* query:     'unit=ping&age=5'     查询字符串去掉问号
* pathname:  '/hiyuan'             路径名
* path       'huiyuan?unit=ping'
*
* */