const {readFileSync, writeFileSync, readFile, writeFile} = require('fs'); 

// const first = readFileSync('./content/first.txt', 'utf8')
// const seconnd = readFileSync('./content/sec.txt', 'utf8')

// console.log(first)
// console.log(seconnd)

// writeFileSync('./content/res.txt', 
// `overwritten dlksjljdslkjsd`, {flag:'a'})


//Buffer
readFile('./content/first.txt', 'utf8',(err, result)=>{
  if(err) {
    console.log(err)
    return;
  }  
  const first = result;
  readFile('./content/sec.txt', 'utf8', (err, result)=>{
    if(err) {
        console.log(err)
        return;
      }  
      const sec = result;
      writeFile('./content/res-s.txt',
       'Hello Written'
    ,(err, result)=>{
       if(err){
        console.log(err);return;
       } 
       console.log(result);
    })
    
  })
})

