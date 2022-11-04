
const fs = require('fs');
const path =require('path');

function init() {
  fs.mkdir(path.join(__dirname, 'files-copy'),
  { recursive: true },
    err => {
      if(err) throw err;
      console.log('Папка была создана'); 
    }     
  );
}

function getFile() {

  fs.readdir(path.join(__dirname, 'files'),  
    (err, files) => {
      if(err) throw err;
      files.forEach(file => {      
        copyDir(file);
      }); 
    }
  );
}

function copyDir(files) {
  fs.copyFile(path.join(__dirname, 'files', files), path.join(__dirname, 'files-copy', files), 
    (err) => {
      if (err) {
      console.log(err);
    }
  });
}

fs.access('files-copy', 
  fs.constants.F_OK, (err) => {
    if(err) init();
    getFile();
  }
);
