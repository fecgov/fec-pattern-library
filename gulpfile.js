/* global require, process */

var _ = require('underscore');

var browserify = require('browserify');

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy-images', function() {
  return gulp.src(['./node_modules/fec-style/img/**/*'])
    .pipe(gulp.dest('./public/img'));
});

gulp.task('build-sass', ['copy-images'], function() {
  return gulp.src('./node_modules/fec-style/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./node_modules/scss/*.scss', ['build-sass']);
});
