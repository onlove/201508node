/**
 * Created by Administrator on 2016/3/18.
 */
var XHR=function(){
    var fns=[function(){
        return new XMLHttpRequest();
    },function(){
        return new ActiveXObject('Msxml2.XMLHTTP');
    },function(){
        return new ActiveXObject('Msxml3.XMLHTTP');
    },function(){
        return new ActiveXObject('Microsoft.XMLHTTP');
    }];

    var val;
    for(var i=0;i<fns.length;i++){
        try{
            val=fns[i]();
        }catch(e){
            continue;
        }
        XHR=fns[i];
        break;
    }
    return val;
}