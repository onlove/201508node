/**
 * Created by Administrator on 2016/3/2.
 */
var http=require('http')
var url=require('url');
var querystring=require('querystring');
var fs=require('fs');
var user=[];
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=="/"){
        fs.createReadStream('./reg.html').pipe(res)
    }else if(pathname=='/reg'){
        var contentType=req.headers['content-type'];
        console.log(contentType)
        req.setEncoding("utf8");
        var result='';
        req.on('data',function(chuck){
           result+=chuck;
        });
        req.on('end',function(){
            if(contentType=='application/json'){
                req.body=JSON.parse(result);
            }else if(contentType=='application/x-www-form-urlencoded'){
                req.body=querystring.parse(result);
            }
            req.end(JSON.stringify(req.body));

        })
    }
    function hashBody(req){
        return req.headers['content-length'];
    }

});
server.listen(8081)
