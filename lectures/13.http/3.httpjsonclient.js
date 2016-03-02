/**
 * 可以向服务器发起请求
 */
var http=require('http');
var options={
    host: 'localhost',
    port: '8081',
    path: '/reg',
    method:'POST',
    headers:{'Content-Type':'application/json'}
};
var request=http.request(options,function(res){
    console.log(res.statusCode);
    res.on('data',function(chunk){
        console.log(chunk)
    })
});

//request.write('{"name":"zfp","age":"6"}');//写请求体，
request.end(); //结束写请求，

