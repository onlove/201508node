var gulp = require('gulp');
var concat = require('gulp-concat');//合并文件
var uglify = require('gulp-uglify');//压缩文件

gulp.task('uglify',function(){
    return gulp.src(['app/js/*.js','!app/js/*.tmp.js'])
        .pipe(concat('app.js')) //把多个JS文件合并成一个文件
        .pipe(uglify()) //对合并后的app.js文件进行压缩
        .pipe(gulp.dest('dist/js')); //输出到目的地
});

gulp.task('default',['uglify']);