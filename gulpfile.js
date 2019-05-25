/**
 * ----------------------------------------------------------------------
 *  Set Project Paths
 * ----------------------------------------------------------------------
 */

const srcPath                               = './src/'
const staticPath                            = './static/'
const distPath                              = './dist/'


/**
 * ----------------------------------------------------------------------
 *  Require and Initialize all Modules
 * ----------------------------------------------------------------------
 */

let {src, dest, watch, series }             = require('gulp')
let browserSync                             = require('browser-sync')
let rename                                  = require('gulp-rename')
let sass                                    = require('gulp-sass')
let sourcemaps                              = require('gulp-sourcemaps')
let uglify                                  = require('gulp-uglify')


/**
 * ----------------------------------------------------------------------
 *  Tasks
 * ----------------------------------------------------------------------
 */

function buildScss () {
    return src(srcPath + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(distPath + 'css/'))
}

function buildJS () {
    return src(srcPath + 'js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(distPath + 'js/'))
}

function buildHTML () {
    return src(srcPath + 'html/**/*.html')
    .pipe(dest(distPath))
}

function buildStaticCss () {
    return src(staticPath + 'css/**/*')
    .pipe(dest(distPath + 'css/'))
}

function buildStaticJS () {
    return src(staticPath + 'js/**/*')
    .pipe(dest(distPath + 'js/'))
}

/**
 * ----------------------------------------------------------------------
 *  Define exports/tasks
 * ----------------------------------------------------------------------
 */

exports.default = () => {
    browserSync.init(['*.css', '*.scss'], {
        server: {
            baseDir: "./dist"
        }
    });
    watch(srcPath + 'js/**/*.js', buildJS)
    watch(srcPath + 'scss/**/*.scss', buildScss)
    watch(srcPath + 'html/**/*.html', buildHTML)
    watch(staticPath + 'js/**/*', buildStaticJS)
    watch(staticPath + 'css/**/*', buildStaticCss)
    watch([srcPath + 'html/**/*.html', srcPath + 'js/**/*.js', srcPath + 'scss/**/*.scss']).on('change', browserSync.reload)
}

exports.build = series([
    buildJS,
    buildScss,
    buildStaticJS,
    buildStaticCss,
    buildHTML
])

exports.buildSrc = series([
    buildJS,
    buildScss,
    buildHTML
])

exports.buildStatic = series([
    buildStaticJS,
    buildStaticCss
])