/**
 * 创建Buffer对象三种方法
 * 指定buffer长数
 */
var buf1=new Buffer(12);
console.log(buf1);
buf1.fill(0,0);
console.log(buf1);

//2.通过数组创建
//var buf2=new Buffer([15,16,17]);
console.log("===========通过数组创建============");
var buf2=new Buffer(['1','2','3'])
//0f 10 11
console.log(buf2)

//3.通过字符串创建
console.log("===========通过字符串创建============");
var buf3=new Buffer('舒适');
console.log(buf3);

//buf3[0]=122;
//console.log(buf3);

//长度
console.log("===========长度============");
var str="舒适";
var buf=new Buffer(str);
console.log(str.length);
console.log(buf.length);

str[0]='我';
buf[0]=1;
console.log(str);
console.log(buf);


//slice
console.log("===========slice============");
var substr=str.slice(0,1);
console.log(substr);
var subbuf=buf.slice(0,1);
subbuf[0]=100
console.log(subbuf);
console.log(buf);

//buffer和字符串如何转化
console.log("===========buffer和字符串如何转化============");
var buf=new Buffer('舒适');
console.log(buf.toString()); //转化为字符串

var buf=new Buffer(6);
buf.write('舒',0,3,'utf8');
buf.write('适',3,3);
console.log(buf.toString());

var buf=new Buffer('舒适');
console.log(buf);
//<Buffer e8 88 92 e9 80 82>
var buf1=new Buffer([0xe8, 0x88, 0x92,0xe9]);
var buf2=new Buffer([0x80, 0x82]);
console.log(buf1.toString());
console.log(buf2.toString());


console.log(Buffer.concat([buf1,buf2],6).toString());

var StringDeconder=require('string_decoder').StringDecoder;
var decoder=new StringDeconder();
var decoder=new StringDeconder();
console.log(decoder.write(buf1));
console.log(decoder.write(buf2));


//判断一个对象是不是buffer
console.log("===========判断一个对象是不是buffer=========")
console.log(Buffer.isBuffer({}));
console.log(Buffer.byteLength('舒适'));
console.log(Buffer.isEncoding('utf8'));


