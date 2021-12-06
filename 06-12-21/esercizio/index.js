const fs = require('fs').promises;
const arguments = process.argv.slice(2)

// console.log(arguments)


//leggere da console il file di testo indicato 
async function readFile(file){
    const data=await fs.readFile(file)
    console.log(data.toString())
}
console.log(readFile('./lista.txt'))


//scrive su file con sintassi html
async function writeFile(file, content){
    await fs.writeFile(file, content)
}
const text=
`
<ul>
<li>ciao</li>
<li>cia</li>
<li>ci</li>
</ul>

`
writeFile('lista.txt', text)

// fs.readFile()
// fs.writeFile(file, content, { flag: 'a+' } )