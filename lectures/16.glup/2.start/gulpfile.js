var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');//在文件的顶部去包含这个插件，起个名字，叫做 minify
var rename = require('gulp-rename');
gulp.task('minify',function(){
    return gulp.src('app/less/page.less')//指定 less文件
        .pipe(less())//把less编译成css
        .pipe(gulp.dest('dist/css'))//输出到目的地
        .pipe(minify())//对 css再进行压缩
        .pipe(rename('page.min.css'))//重命名
        .pipe(gulp.dest('dist/css'));//输出到目的地
});

gulp.task('default',['less']);