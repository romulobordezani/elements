'use strict';

let sass = require('node-sass');
let glob = require('glob-fs')({ gitignore: true });
let fs = require('fs');
let chokidar = require('chokidar');

function compileSass(file) {
  sass.render(
    {
      file: file.path,
      outputStyle: 'compressed',
    },

    function(err, result) {

      if (err) {
        console.log(err);
        return;
      }

      let compiledCssFile = file.dirname + '/' + file.name + '.css';

      fs.writeFile(compiledCssFile, result.css.toString(), function (err) {
        if (err) {
          console.error(err);
        }
        console.log(file.name + '.scss file has been transformed successfully');
      });
  });
}

glob.readdirStream('**/*.scss')
  .on('data', function (file) {
    compileSass(file);
  })
  .on('error', console.error)
  .on('end', function () {
    addWatcher();
  });

function addWatcher(){

  let watcher = chokidar.watch('./src', {ignored: /\.(js|jsx|mjs|snap|css|png|jpg|jpeg|gif|svg)$/, persistent: true});

  watcher
    .on('add', function(path) {console.log('File', path, 'has been added');})
    .on('change', function(path) {console.log('File', path, 'has been changed');})
    .on('unlink', function(path) {console.log('File', path, 'has been removed');})
    .on('error', function(error) {console.error('Error happened', error);});
}


