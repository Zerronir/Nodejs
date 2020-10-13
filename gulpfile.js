const gulp = require('gulp');
const { series, src, dest, watch } = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const sass = require('gulp-sass');

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
*
* Cream una funció per a minimitzar JavaScript
*
* */
function minifyJS(cb){
   return src("src/js/*.js")
       .pipe(cleanJS())
       .pipe(dest('lib/js/'));
}

function compilaSass(){
    return src("src/scss/*.scss")
            .pipe(sass())
            .pipe(dest('lib/scss/'));
}

function compila(){

}

function watchSCSS(){
    watch('src/scss/*.scss', compilaSass);
}

// Exportamos las tareas
exports.build = build;
exports.default = series(clean, build);
exports.minCSS = minifyCSS;
exports.minJS = minifyJS;
exports.minSCSS = compilaSass;
exports.watcher = watchSCSS;