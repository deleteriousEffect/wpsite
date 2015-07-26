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

gulp.task('uncss', ['sass'], function () {
    return gulp.src('style/css/all.css')
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(uncss({
            html: ['index.html',
                'menu/**/*.html',
                'about/**/*html',
                ]
        }))
        .pipe(gulp.dest('build/style/css/'));
});

gulp.task('movePlugins', function () {
    return gulp.src('node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js')
        .pipe(gulp.dest('js/plugins/'));
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch('style/sass/*.sass', ['uncss']);
});

gulp.task('default', ['movePlugins', 'uncss', 'watch']);
