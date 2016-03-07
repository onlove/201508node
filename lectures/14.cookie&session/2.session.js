/**
 * 会话
 * 辨明用户身份，数据一般存储在服务器端
 * 会话需要一个sessionId
 * 服务器端根据sessinId来获取对应的session
 *
 * 1.数据存放在服务器端，客户端无法篡改
 * 2.数据不需要每次进行传递
 *
 * 原理解析
 * 1.首次访问服务器的时候，服务器通过set-cookie写入客户端一个sessionID
 * 2.以后每次访问服务器的对象，客户端都要将此sessionID返回给服务器
 * 3.服务器需要维护sessionID和些用户的一个关系
 */

var http=require('http');
var url=require('url');
var querystring=require('querystring');
var SESSION_KEY='sessionKey';
var session={}
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathname=urlObj.pathname;
    var now=Date.now();
    if(pathname=='/favicon.icon'){
        return res.end('404')
    }else{
        var cookie=req.headers.cookie;
        var cookieObj=querystring.parse(cookie,'; ');
        if(cookieObj[SESSION_KEY]){
            var sessionId=cookieObj[SESSION_KEY];
            var sessionObj=session[sessionId];
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            if(sessionObj){
                if(sessionObj.mny<=0){
                    res.end('你的余额不足')
                }else{
                    sessionObj.mny-=10;
                    res.end('欢迎你，老顾客，你的余额是'+sessionObj.mny)
                }

            }else{
                var sessionId=now+'_'+Math.random();//卡号
                var sessionObj={mny:100};//会员卡信息
                session[sessionId]=sessionObj;
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8','Set-Cookie':SESSION_KEY+'='+sessionId})
                res.end('欢迎你，老顾客，你的会员卡找不到对应关系 了,余额是100')
            }


        }else{
            var sessionId=now+'_'+Math.random();//卡号
            var sessionObj={mny:100};//会员卡信息
            session[sessionId]=sessionObj;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8','Set-Cookie':SESSION_KEY+'='+sessionId})
            res.end('欢迎你，新顾客，送你一张会员卡,余额是100')
        }
    }
}).listen(8081)
