.var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('uglify',function(){
    return gulp.src(['app/js/*.js','!app/js/*.tmp.js'])//指定要处理的文件
        .pipe(concat('app.js'))//合并成一个文件
        .pipe(gulp.dest('dist/js'))//保存此文件
        .pipe(uglify())//进行压缩
        .pipe(rename('app.min.js'))//对此文件进行重命名
        .pipe(gulp.dest('dist/js'));//再输出一次
});

gulp.task('default',['uglify']);