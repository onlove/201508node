/**
 * Created by Administrator on 2016/3/18.
 */
var express=require('express');
var app=express();

app.use(express.static(__dirname))
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ext4ended:true}));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.post('/books',function(req,res){
    console.log(req.body)
    res.sendfile('book.json');
});
app.listen(8081);