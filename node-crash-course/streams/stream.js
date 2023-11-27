const fs= require('fs');
const readStream=fs.createReadStream('./huge.txt',{encoding: 'utf8'});
const writeStream=fs.WriteStream('./blog4.txt');
// readStream.on('data', (chunk )=>{
//     // if(err) console.log(err)
//     console.log('---------NEW CHUNK----------');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);