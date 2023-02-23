var _ = require('underscore');
var fs = require('fs-extra');

var gulp = require('gulp');
var del = require('del');
var consolidate = require('gulp-consolidate');
var sass = require('gulp-dart-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// task to remove images and fonts to clean directories
gulp.task('clean-assets', function () {
  return del([
    './public/img/*',
    './public/fonts/*'
  ]);
});

// get the latest images and fonts
gulp.task('copy-images', function() {
  return gulp.src(['./node_modules/fec-cms/fec/fec/static/img/**/*'])
    .pipe(gulp.dest('./public/img'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./node_modules/fec-cms/fec/fec/static/fonts/*'])
    .pipe(gulp.dest('./public/fonts'));
});

// build stylesheet of classes for all icons
gulp.task('build-icon-classes', function() {
  // get the list of icons from fec-cms
  function getIconNames() {
    return _(fs.readdirSync('./node_modules/fec-cms/fec/fec/static/icons/output/'))
      .chain()
      .filter(function (filename) {
        return filename.slice(-4) === '.svg';
      }).map(function (filename) {
        return {
          name: filename.split('.')[0],
        };
      }).value();
  }

  // generate css classes for icons from getIconNames list from icon-template.scss template
  return gulp.src('./static/templates/icon-classes.scss')
    .pipe(consolidate('underscore', {
      icons: getIconNames()
    }))
    .pipe(rename({basename: '_icon-classes'}))
    .pipe(gulp.dest('./static/scss'));
});

// build custom icons stylesheet, refresh images and fonts, and then build our complete stylesheet
gulp.task('build-sass', gulp.series(['build-icon-classes', 'clean-assets', 'copy-images', 'copy-fonts'], function() {
  return gulp.src('./static/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./public/css'));
}));

// generate HTML template for icons documentation component
gulp.task('build-icons-component', function() {
  function getIconNames() {
    return _(fs.readdirSync('./node_modules/fec-cms/fec/fec/static/icons/output/'))
      .chain()
      .filter(function (filename) {
        return filename.slice(-4) === '.svg';
      }).map(function (filename) {
        return {
          name: filename.split('.')[0],
        };
      }).value();
  }

  return gulp.src('./static/templates/icons-component.html')
    .pipe(consolidate('underscore', {
      icons: getIconNames()
    }))
    .pipe(rename({basename: '_icons'}))
    .pipe(gulp.dest('./components/01-basics/'));
});
