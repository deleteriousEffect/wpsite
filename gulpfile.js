'use strict';
var gulp = require('gulp');

var  sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css');

// Compile sass files.
gulp.task('sass', function () {
    return gulp.src('style/sass/*.sass')
        .pipe(sass({indentedSyntax: true,
                    errLogToConsole: true
            }))
        .pipe(concat('all.css'))
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
    gulp.watch('style/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
