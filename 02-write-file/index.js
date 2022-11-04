
const { stdin, stdout } = process;

const fs = require('fs');
const path =require('path');

stdout.write('Приветствую тебя, введи свое желание для Деда Мороза.\n');

function init() {
  fs.writeFile(path.join(__dirname, 'gift.txt'),
    '',
    (err) => {
      if(err) throw err;      
    }
  );
}

function wr(gift) { 

  fs.appendFile(path.join(__dirname, 'gift.txt'),
    gift,
    (err) => {
    if(err) throw err;        
    console.log('Желание отправлено Деду Морозу.');
    console.log('Продолжить.');
  });  
}

fs.access('gift.txt', fs.constants.F_OK, (err) => {
  if(err) init();

  stdin.on('data', data => {
    const gift = data.toString();
    wr(gift);
  });
  process.on('exit', () => stdout.write('Дед Мороз исполнит все твои желания!'));      
});