
const fs = require('fs');
const path = require('path');

function init() {
  fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (err) => {
    if (err) throw err;
  });
}

function search() {

  fs.readdir(path.join(__dirname, 'styles'),
    { withFileTypes: true }, 
    (err, files) => {
      if(err) throw err;
      files.forEach(file => {       
        const ex = path.extname(file.name);        
        if(ex === '.css') {          
          fs.readFile(path.join(__dirname, 'styles', file.name), 'utf-8', (err, data) => {
            if (err) console.log(err);
            
            fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (err) => {
              if (err) console.log(err);
              console.log('Бандл создан');
        
            });                 
          });
        }                 
      }); 
      
    }
  );
}

fs.access('bundle.css', fs.constants.F_OK, (err) => {
  if (err) init();
  search();    
});