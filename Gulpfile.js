"use strict";

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload');

var path = {
	  JADE: './assets/templates/index.jade',
	  SASS: [
		'./assets/sass/style.sass',
		'./assets/sass/**/*.scss',
		'./assets/sass/**/*.sass'
			],
	  JS: [
	  	'./assets/js/vendor/*.js',
	  	'./assets/js/*.js'
	  	],
	  SVG: './assets/svg/*.svg'
};

gulp.task('sass-in', function() {
	gulp.src(path.SASS)
		.pipe(sourcemaps.init())
		.pipe(sass({style: 'expanded', lineNumbers : true }).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions', 'safari 5', 'ie8', 'ie9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./builds/inbound/css'))
		.pipe(connect.reload());
});

gulp.task('js-in', function() {
	gulp.src(path.JS)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./builds/inbound/js'))
		.pipe(connect.reload());
});

gulp.task('jade-in', function() {
	gulp.src(path.JADE)
		.pipe(jade({
			pretty: true
			}))
		.pipe(gulp.dest('./builds/inbound'))
		.pipe(connect.reload());
});

gulp.task('svg-in', function() {
    gulp.src(path.SVG)
    	.pipe(rename({prefix: 'svg-'}))
    	.pipe(svgmin())
    	.pipe(svgstore())
    	.pipe(rename('defs.svg'))
    	.pipe(gulp.dest('./builds/inbound/svgs'))
    	.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
    root: './builds/inbound',
    livereload: true,
    port: 8003
  });
});

gulp.task('watch', function() {
	gulp.watch(path.SASS, ['sass-in']);
	gulp.watch(path.JS, ['js-in']);
	gulp.watch(path.JADE, ['jade-in']);
	gulp.watch(path.SVG), ['svg-in'];
});

gulp.task('default', ['sass-in', 'js-in', 'jade-in', 'svg-in' , 'connect', 'watch']);