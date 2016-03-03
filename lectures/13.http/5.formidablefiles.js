/**
 * Created by Administrator on 2016/3/2.
 */
/**
 * Created by Administrator on 2016/3/2.
 */
/**
 * Created by Administrator on 2016/3/2.
 */
var http=require('http')
var url=require('url');
var querystring=require('querystring');
var formidable=require('formidable');
var mime=require('mime');
var fs=require('fs');
var user=[];
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=="/"){
        fs.createReadStream('./h5.html').pipe(res)
    }else if(pathname=='/reg'){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var filenames=[];
            for(var filename in files){
                fs.createReadStream(files[filename].path).pipe(fs.createWriteStream('./upload/'+files[filenames].name))
                filename.push("/upload/"+files[filenames].name)
            }
            res.end(JSON.stringify(filenames))
        })
    }else if(pathname=='/favicon.ico'){
        return res.end('404');
    }else{
        res.setHeader('Content-Type',mime.lookup(pathname))
        fs.createReadStream('.'+pathname).pipe(res);
    }


});
server.listen(8081);


