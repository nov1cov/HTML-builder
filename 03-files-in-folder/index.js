
const fs = require('fs');
const path =require('path');

fs.readdir(path.join(__dirname, 'secret-folder'),
  { withFileTypes: true }, 
  (err, files) => {
    if(err) throw err;
    files.forEach(file => {      
      const nm = path.parse(file.name).name; 
      const ex = path.extname(file.name).replace(/^\./, "");      
      fs.stat(path.join(__dirname, 'secret-folder', file.name),
        (err, stats) => {
          if (err) console.log(err);
          const nfs =  nm + " - " + ex + " - " + stats.size;
          console.log(nfs);  
        }
      );      
    }) 
  }
);