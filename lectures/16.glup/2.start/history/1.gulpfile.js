var gulp=require('gulp');

gulp.task('a',function(){
    console.log('a')
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


gulp.task('default',function(){
    gulp.src('static/js/**/*.*')
        .pipe(gulp.dest('bulid',{cwd:'js'}))
})

/*
var fs=require('fs');
function pipe(src,dest){
    fs.createReadStream(src).pipe(fs.createWriteStream(dest))
}
pipe('script/src.js','dist');
*/
