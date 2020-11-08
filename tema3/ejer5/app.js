var fs = require('fs');


fs.appendFile('hello.txt', 'Hola mundooooooooooooo!', function(err) {
  
  if(err) return console.error(err);
  
});

