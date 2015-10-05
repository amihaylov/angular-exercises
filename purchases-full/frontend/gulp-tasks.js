var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('./app/styles/app.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('./app/styles/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['connect', 'sass:watch']);