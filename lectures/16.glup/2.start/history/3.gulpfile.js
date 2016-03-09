var gulp=require('gulp');
var Q=require('q');
gulp.task('a',function(){
    var defer= Q.defer();
    setTimeout(function(){
       console.log('a');
        defer.resolve();
    },3000);

    return defer.promise;

});
gulp.task('b',function(){
    console.log('b')
});

gulp.task('default',['a','b'],function(){})


