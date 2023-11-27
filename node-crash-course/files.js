const fs=require('fs');
// fs.readFile('./onee.txt', (err, data)=>{
//     if(err){
//       console.log(err); 
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// fs.writeFile('./one.txt', 'Hello World', ()=>{
//     console.log('file was written');
// });
// //#creates automatilcally
// fs.writeFile('./two.txt', 'Hello World2', ()=>{
//     console.log('file was written');
// });


if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err) console.log(err);
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// #deleting files 
if(fs.existsSync('./docs/blog1.txt')){
    fs.unlink('./docs/blog1.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}