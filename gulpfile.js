const { series } = require('gulp');
const clean = require('gulp-clean-css');

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

function clearCSS(cb) {
    cb();
}

exports.build = build;
exports.default = series(clean, build);