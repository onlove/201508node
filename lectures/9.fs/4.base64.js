/**
 * base64编码是把3个8位字节，转化为4个6位字节:
 *
 */

/*
//console.log(parseInt(''));
var buf=new Buffer('珠');
console.log(buf);
//<Buffer e7 8f a0>
console.log(parseInt("e7",16),parseInt("8f",16),parseInt("a0",16))
//231 143 160
console.log((231).toString(2),(143).toString(2),(160).toString(2))
//11100111 10001111 10100000

//00111001 00111000 00111110 00100000
console.log(parseInt("00111001",2),parseInt("00111000",2),parseInt("00111110",2),parseInt("00100000",2))
//57 56 62 32
var str="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789+/";
console.log(str[57]+str[56]+str[62]+str[32])

*/
function base64(str){
    var buf=new Buffer(str),
        arr=[],
        result='';
    //console.log(buf)
    for(var i=0;i<buf.length;i++){
        //console.log(('00000000'+buf[i].toString(2)))
        //console.log(buf[i].toString(2).substr(-8))
        arr.push(('00000000'+buf[i].toString(2)).substr(-8));
    }
    console.log(arr)
    result=dataTrans(arr.join(''));
    return result
}

function dataTrans(str){
    console.log(str);
    var endStr="";
    var strObj="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789+/";
    var result='';
    switch(str.length%24){
        case 0:
            break;
        case 8:
            endStr="==";
            break;
        default:
            endStr="=";
    }
    switch(str.length%6){
        case 2:
            str+="0000";
            break;
        case 4:
            str+="00";
    }
    for(var i= 0,strLen=str.length;i<strLen;i+=6){
        var n=parseInt(str.substr(i,6),2);
        result+=strObj[n];
    }
    return result+endStr
}

console.log(base64("珠ab"))
