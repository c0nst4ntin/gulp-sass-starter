/**
 * ----------------------------------------------------------------------
 *  Set Project Paths
 * ----------------------------------------------------------------------
 */

const srcPath = './src/'
const staticPath = './static/'
const distPath = './dist/'


/**
 * ----------------------------------------------------------------------
 *  Require and Initialize all Modules
 * ----------------------------------------------------------------------
 */

let { src, dest, watch, series } = require('gulp')
let browserSync = require('browser-sync')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let uglify = require('gulp-uglify')


/**
 * ----------------------------------------------------------------------
 *  Tasks
 * ----------------------------------------------------------------------
 */

function buildScss () {
    return src(srcPath + 'scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(distPath + 'css/'))
}

function buildJS () {
    return src(srcPath + 'js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(distPath + 'js/'))
}

function buildHTML () {
    return src(srcPath + 'html/**/*.html')
        .pipe(dest(distPath))
}

function buildStatic () {
    return src(staticPath + '**/*')
        .pipe(dest(distPath))
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
    watch(staticPath + '**/*', buildStatic)
    watch([srcPath + 'html/**/*.html', srcPath + 'js/**/*.js', srcPath + 'scss/**/*.scss']).on('change', browserSync.reload)
}

exports.build = series([
    buildJS,
    buildScss,
    buildHTML,
    buildStatic
])