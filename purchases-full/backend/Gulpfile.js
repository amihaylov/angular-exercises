var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

// Define tasks
gulp.task('server', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('lint', function () {
    gulp.src('./**/*.js')
        .pipe(jshint());
});

gulp.task('default', function(){
    gulp.run(['lint','server']);
});