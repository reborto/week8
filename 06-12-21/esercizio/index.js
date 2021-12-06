const fs = require('fs').promises;
const arguments = process.argv.slice(2)
console.log(arguments, "ciao");

fs.readFile()
fs.writeFile(file, content, { flag: 'a+' } )