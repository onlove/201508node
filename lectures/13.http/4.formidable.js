/**
 * Created by Administrator on 2016/3/2.
 */
/**
 * Created by Administrator on 2016/3/2.
 */
var http=require('http')
var url=require('url');
var querystring=require('querystring');
var formidable=require('formidable')
var fs=require('fs');
var user=[];
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=="/"){
        fs.createReadStream('./index.html').pipe(res)
    }else if(pathname=='/reg'){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
           // console.log(fields)
            //console.log(files);
            res.setHeader('Content-Type','text/html;charset=utf-8')
            fs.createReadStream(files.avtor.path).pipe(fs.createWriteStream('./upload/'+files.avtor.name))
            res.write(JSON.stringify(fields));
            res.end('<img src="/upload/'+files.avtor.name+'">');
        })
    }else if(pathname=='/favicon.ico'){
        res.end();
    }else{
        fs.createReadStream('.'+pathname).pipe(res);
    }


});
server.listen(8081);
