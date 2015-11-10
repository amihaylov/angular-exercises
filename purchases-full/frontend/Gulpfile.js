var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-ruby-sass');

//TODO Sass
gulp.task('sass', function() {
    return sass('./styles/styles.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('./styles/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['connect', 'sass:watch']);