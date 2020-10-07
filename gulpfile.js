const gulp = require('gulp');
const { series, src, dest } = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    // body omitted
    cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    // body omitted
    cb();
}

function minifyCSS(cb){
    // Devolvemos un return con todos los archivos
    return src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('lib/css/'));
}

/*
* Cream una funció per a minimitzar JavaScript
*
* */
function minifyJS(cb){
   return src("src/js/*.js")
       .pipe(cleanJS())
       .pipe(dest('lib/js/'));
}



exports.build = build;
exports.default = series(clean, build);
exports.minCSS = minifyCSS;
exports.minJS = minifyJS;