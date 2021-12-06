const fs = require('fs').promises;
const arguments = process.argv.slice(2)

console.log(arguments)

async function readFile(file){
    const data=await fs.readFile(file)
    console.log(data.toString())
}

console.log(readFile('./readme.md'))
// fs.readFile()
// fs.writeFile(file, content, { flag: 'a+' } )