var gulp=require('gulp');

gulp.task('a',function(callback){
    setTimeout(function(){
       console.log('a');
       callback();
    },3000)
    //process.nextTick(function(){
    //    console.log('a');
    //    callback();
    //})
});
gulp.task('b',function(){
    console.log('b')
});

/*
gulp.task('default',['a','b'],function(){
    gulp.src('script/src.js')  //获取文件的流api
        .pipe(gulp.dest('dist'))//写文件的api
});*/

//gulp.task('default',function(){
//    gulp.src('client/js/**/*.js')
//        .pipe(gulp.dest('bulid'))
//});


gulp.task('default',['a','b'],function(){})

/*
var fs=require('fs');
function pipe(src,dest){
    fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}
pipe('script/src.js','dist');
*/
