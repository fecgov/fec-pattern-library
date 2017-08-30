var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy-images', function() {
  return gulp.src(['./node_modules/fec-style/img/**/*'])
    .pipe(gulp.dest('./public/img'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./node_modules/fec-style/fonts/**/*'])
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('build-sass', ['copy-images', 'copy-fonts'], function() {
  return gulp.src('./styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
