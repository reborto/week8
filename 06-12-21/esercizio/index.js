const fs = require('fs').promises;
const arguments = process.argv.slice(2)

// console.log(arguments)


//leggere da console il file di testo indicato 
async function readFile(file){
    const data=await fs.readFile(file)
    console.log(data.toString())
}
console.log(readFile('./lista.txt'))


//scrive su file 
async function writeFile(file, content){
    await fs.writeFile(file, content, {flag:'a+'})
}
const text=
`
<ul>
<li>${arguments[0]}, ${arguments[1]} </li>
</ul>

`
writeFile('lista.txt', text)

// fs.readFile()
// fs.writeFile(file, content, { flag: 'a+' } )