/**
 * Created by Administrator on 2016/3/2.
 */
var location="http://zf:123@localhost:8080/a/b?name=%22ddd%22&age=6";
var url=require('url');
var urlObj=url.parse(location,true);
console.log(urlObj);
console.log(url.format(urlObj)) //把query转换为对象