//module.exports={};
//function home(requier,__dirname,__filename,module){
    //var exports=module.exports

    var x=5;
    console.log('Hello you')
    var addX=function(num){
        console.log(x+num);
    }
    exports.addX=addX;
    exports.x=x;
    exports.say=function(world){
        console.log('Hello '+world)
    }
    module.exports=function(name){
        console.log('hello'+name)
    }

    //return module.exports;
//}

