'use strict';

var gulp = require('gulp');


var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.bless', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function (options) {
    gulp.task('partials', function () {
        return gulp.src([
            options.src + '/app/**/*.html',
            options.tmp + '/serve/app/**/*.html'
        ])
            .pipe($.minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe($.angularTemplatecache('templateCacheHtml.js', {
                module: 'OR13hApp',
                root: 'app'
            }))
            .pipe(gulp.dest(options.tmp + '/partials/'));
    });

    gulp.task('html', ['inject', 'partials'], function () {
        var partialsInjectFile = gulp.src(options.tmp + '/partials/templateCacheHtml.js', {read: false});
        var partialsInjectOptions = {
            starttag: '<!-- inject:partials -->',
            ignorePath: options.tmp + '/partials',
            addRootSlash: false
        };

        var htmlFilter = $.filter('*.html');
        var jsFilter = $.filter('**/*.js');
        var cssFilter = $.filter('**/*.css');

        var assets;

        var cssProcessors = [
            autoprefixer({browsers: ['last 2 version']}),
            mqpacker,
            csswring,
            $.csso,
            $.bless
        ];

        return gulp.src(options.tmp + '/serve/*.html')
            .pipe($.inject(partialsInjectFile, partialsInjectOptions))
            .pipe(assets = $.useref.assets())
            .pipe(cssFilter)
            .pipe($.concat('styles/all.css'))
            .pipe($.replace('../../bower_components/bootstrap/fonts/', '../fonts/'))
            .pipe($.postcss(cssProcessors)).on('error', options.errorHandler('Autoprefixer'))
            .pipe(cssFilter.restore())
            .pipe($.rev())
            .pipe(jsFilter)
            .pipe($.ngAnnotate())
            .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', options.errorHandler('Uglify'))
            .pipe(jsFilter.restore())
            .pipe(assets.restore())
            .pipe($.useref())
            .pipe($.replace('<link rel="stylesheet" href="styles/temp.css">', ''))
            .pipe($.revReplace())
            .pipe(htmlFilter)
            .pipe($.minifyHtml({
                empty: true,
                spare: true,
                quotes: true,
                conditionals: true
            }))
            .pipe(htmlFilter.restore())
            .pipe(gulp.dest(options.dist + '/'))
            .pipe($.size({title: options.dist + '/', showFiles: true}));
    });

    // Only applies for fonts from bower dependencies
    // Custom fonts are handled by the "other" task
    gulp.task('fonts', function () {
        return gulp.src($.mainBowerFiles())
            .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
            .pipe($.flatten())
            .pipe(gulp.dest(options.dist + '/fonts/'));
    });

    gulp.task('other', function () {
        return gulp.src([
            options.src + '/**/*',
            '!' + options.src + '/**/*.{html,css,js,less,ts}'
        ])
            .pipe(gulp.dest(options.dist + '/'));
    });

    gulp.task('clean', ['tsd:purge'], function (done) {
        $.del([options.dist + '/', options.tmp + '/'], done);
    });

    gulp.task('build', ['html', 'fonts', 'other']);

    gulp.task('build-dev', ['build']);

    gulp.task('build-staging',[ 'build'], function () {
        return gulp.src(options.dist + '/**/*.html')
            .pipe($.replace('https://dev-api.example.com', 'https://staging-api.example.com'))
            .pipe(gulp.dest(options.dist + '/'));
    });

    gulp.task('build-prod',['build'], function () {
        return gulp.src(options.dist + '/**/*.html')
            .pipe($.replace('https://dev-api.example.com', 'https://api.example.com'))
            .pipe(gulp.dest(options.dist + '/'));
    });

};
