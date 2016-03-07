/**
 * cookie 是web服务器向浏览器发送的一段ASCII文本
 * 客户端一旦收到cookie浏览器会保存在本地 key=value
 * 以后每次客户身服务器发请求，都需要把之前发给它的cookie发回给服务器
 */

/*
* 设置cookie的时候，还需要设置一些额外的参数
* Set-Cookie:name=zf; path=/foo; domain=.baidu;
* key=Value 键值对 这是必须的
*
* path
*   控件访问哪那些路径可以发送cookie
*
* domain
*   指定cookie会发送到哪个域名下面
*
* expires
* max-age
*   指定cookie的失效时间，如果没有指定失效时间，那么cookie会写入内存
*   只持续到会话结束(浏览器关闭)
*
* httpOnly
*   不能在JS里操作
* */


/*
* 1.服务器向客户端发cookie 除非cookie过期，否则每次请求就会发cookie
* 2.存放在客户端，容易被篡改
* ----------------------
* 1.不要存储私密数据
* 2.正确的设置path domain 以减少cookie的发送
* 3.正确设置 httoOnly 防止cookie被篡改
* */
var http=require('http');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/favicon.ico'){
        return res.end('404');
    }else if(pathname=='/write') {
        //res.writeHead(200,{'Content-Type':'text/html','Set-Cookie':'name=zf'})
        //res.setHeader('Set-cookie','name=zf; path=/a')
        //res.setHeader('Set-Cookie','name=zf; domain=b.zf.cn');
        //res.setHeader('Set-Cookie','name=zf; Expires='+new Date(new Date().getTime()+3600*1000).toGMTString())
        //res.setHeader('Set-Cookie','name=zf; Max-Age=10')
        //res.setHeader('Set-Cookie','name=zf; HttpOnly');

        res.end('hello');
    }else{
        var cookie=req.headers.cookie;
        var cookieObj=querystring.parse(cookie,'; ');
        res.setHeader('Content-Type','text/html;charset=utf-8')
        if(cookieObj.name){
           res.end('欢迎你老朋友')
        }else{
           res.end('欢迎你新朋友');
        }


    }
}).listen(8081);
