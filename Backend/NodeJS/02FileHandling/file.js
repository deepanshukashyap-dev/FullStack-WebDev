const fs = require('fs');

//writeFileSync to write in the file 
fs.writeFileSync("./02FileHandling/test.txt","Hey there! this is written by file handling");

//Async..
fs.writeFile("./02FileHandling/test.txt","hey there! ASYNC file",(err)=>{console.log(err)});

const contacts = fs.readFileSync("./02FileHandling/contacts.txt","utf-8")
console.log(contacts);
