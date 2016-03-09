var gulp=require('gulp');

gulp.task('test',function(){
    console.log('test');
});

gulp.task('default',function(){
   gulp.run('test');
})

