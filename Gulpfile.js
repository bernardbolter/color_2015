"use strict";

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	reactify = require('reactify'),
	streamify = require('gulp-streamify'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	jade = require('gulp-jade'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect')

var path = {
		JADE: [
			'assets/templates/*.jade',
			'assets/templates/*/*.jade'
		],
		HTML: 'assets/templates/index.html',
		SASS: [
			'assets/sass/style.sass',
			'assets/sass/**/*.scss',
			'assets/sass/**/*.sass'
		],
		FAVICON: 'assets/img/favicon.ico',
		SVG: 'assets/svg/*.svg',
		IMG: [
			'assets/img/**/*.jpg',
			'assets/img/*.png'
		],
		FONTS: [
			'assets/fonts/*.eot',
			'assets/fonts/*.svg',
			'assets/fonts/*.ttf',
			'assets/fonts/*.woff'
		]
};

gulp.task('sass-in', function() {
	gulp.src(path.SASS)
		.pipe(sourcemaps.init())
		.pipe(sass({style: 'expanded', lineNumbers : true }).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions', 'safari 5', 'ie8', 'ie9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('builds/inbound/css'))
		.pipe(connect.reload());
});

gulp.task('sass-out', function() {
	gulp.src(path.SASS)
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 versions', 'safari 5', 'ie8', 'ie9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('builds/outbound/css'));
});

gulp.task('js-in', function() {
	var bundler = watchify(browserify({
		entries: ['./assets/app/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('bundle.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./builds/inbound/js'))
			.pipe(connect.reload());
	};
	build()
	bundler.on('update', build)
});

gulp.task('js-out', function() {
	var bundleStream = watchify(browserify({
		entries: ['./assets/app/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	})).bundle()

	bundleStream
		.pipe(source('./assets/app/app.jsx'))
		.pipe(streamify(uglify()))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('./builds/outbound/js'))

});

gulp.task('svg-in', function() {
		gulp.src(path.SVG)
			.pipe(rename({prefix: 'svg-'}))
			.pipe(svgmin())
			.pipe(svgstore())
			.pipe(rename('defs.svg'))
			.pipe(gulp.dest('builds/inbound/svgs'))
			.pipe(connect.reload());
});

gulp.task('svg-out', function() {
		gulp.src(path.SVG)
			.pipe(rename({prefix: 'svg-'}))
			.pipe(svgmin())
			.pipe(svgstore())
			.pipe(rename('defs.svg'))
			.pipe(gulp.dest('builds/outbound/svgs'))
			.pipe(connect.reload());
});

gulp.task('clean-in', function() {
	return gulp.src('builds/inbound', {read: false})
		.pipe(clean());
});

gulp.task('clean-out', function() {
	return gulp.src('builds/outbound', {read: false})
		.pipe(clean());
});

gulp.task('copyImg', function() {
	gulp.src(path.IMG)
	 .pipe(gulp.dest('builds/inbound/img'));
});

gulp.task('copyImg-out', function() {
	gulp.src(path.IMG)
	 .pipe(gulp.dest('builds/outbound/img'));
});

gulp.task('copyHTML', function() {
	gulp.src(path.HTML)
		.pipe(gulp.dest('builds/inbound'));
});

gulp.task('copyHTML-out', function() {
	gulp.src(path.HTML)
		.pipe(gulp.dest('builds/outbound'));
});

gulp.task('moveFavicon', function() {
	gulp.src(path.FAVICON)
		.pipe(gulp.dest('builds/inbound'));
});

gulp.task('moveFavicon-out', function() {
	gulp.src(path.FAVICON)
		.pipe(gulp.dest('builds/outbound'));
});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/inbound',
		livereload: true,
		port: 8003
	});
});

gulp.task('watch', function() {
	gulp.watch(path.SASS, ['sass-in']);
	gulp.watch(path.JS, ['js-in']);
	gulp.watch(path.SVG), ['svg-in'];
});

gulp.task('test-outbound', function() {
	connect.server({
		root: 'builds/outbound',
		livereload: true,
		port: 8004
	});
});

gulp.task('default', ['sass-in', 'js-in', 'copyHTML', 'svg-in' , 'connect', 'copyImg', 'moveFavicon', 'watch']);

gulp.task('outbound', ['clean-out', 'js-out', 'sass-out', 'svg-out', 'copyImg-out', 'copyHTML-out', 'moveFavicon-out']); 