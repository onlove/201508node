/**
 * Created by Administrator on 2016/3/1.
 */
var http=require('http');
var url=require('url')
var server=http.createServer(function(req,res){
    var urlStr=req.url;//获取请求的字符串
    var urlObj=url.parse(req.url,true);
    //console.log(urlObj);
    //console.log(req.method);
    //console.log(req.headers);
    req.on('data',function(chuck){
        console.log(chuck)
    })

    //res.statusCode=404;
    // res.setHeader("name","zf")
    res.writeHead(200,{name:'zf',age:6})
    res.write('Hello');

    res.end('world');
})

server.listen(8081);