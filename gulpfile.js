const { series } = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

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

function minifyCSS(){
    // Devolvemos un return con todos los archivos
    return src('src/css/*.css', {sourcemap: true})
        .pipe(cleanCSS())
        .pipe(dest('dist/'));
}

exports.build = build;
exports.default = series(clean, build);
exports.minCSS = minifyCSS;