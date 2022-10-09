const fs=require("fs");
const path=require('path');


fs.writeFile(path.join(__dirname,"newfile.txt"),"this is a new file , "
(err)=>{
    console.log('successfully written to the file');
    if(err){
        throw err.name;
    }
})



// console.log(__dirname);
// console.log(__filename);