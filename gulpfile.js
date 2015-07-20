'use strict';
var gulp = require('gulp');

var  sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css');

// Compile sass files.
gulp.task('sass', function () {
    return gulp.src('style/sass/all.sass')
        .pipe(sass({indentedSyntax: true,
                    errLogToConsole: true
            }))
        .pipe(gulp.dest('style/css/'));
});

gulp.task('uncss', function () {
    return gulp.src('style/css/all.css')
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(uncss({
            html: ['index.html'],
        }))
        .pipe(gulp.dest('style/css/'));
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch('style/sass/all.sass', ['sass']);
    gulp.watch('style/css/all.css', ['uncss']);
});

gulp.task('default', ['sass', 'uncss', 'watch']);