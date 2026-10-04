const { error } = require('console');
const fs = require('fs');


// Synchronous version of writeFile (blocking)
// fs.writeFileSync("./03NodeJS-works/new.txt","hey! there")
// console.log("File written successfully");



//the best practice is to use asynchronous methods to avoid blocking the event loop
// to make it non-blocking, we can use the asynchronous version of writeFile

//============================= ASynchronous version of writeFile (NonBlocking,Preferred) ===========================
fs.writeFile("./03NodeJS-works/new_async.txt","hey! there asynchronously", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File new_async.txt written successfully (asynchronously)");
    } 
});



// Synchronous version of unlink(blocking)
// fs.unlinkSync("./03NodeJS-works/new.txt");
// console.log("File new.txt deleted successfully");



//================================ Asynchronous version of unlink (non-blocking,preferred) ===========================
// fs.unlink("./03NodeJS-works/new_async.txt", (err) => {
//     if (err){
//         console.error("Error deleting file:", err);
//     }else{
//         console.log("File new_async.txt deleted successfully (asynchronously)");
//     }
// });
// this helps in non-blocking the event loop , in industry asynchronous methods are preferred over synchronous methods



console.log("This will log before file write completes"); //even though this line is after the asynchronous writeFile, it will execute first



// Synchronous version of readFile(blocking)
const result = fs.readFileSync("./03NodeJS-works/contacts.txt","utf-8")//ye blocking hai isliye ye bhi pehle chalega
console.log("Contacts file read successfully (synchronously)",result); 



//================================ Asynchronous version of readFile (non-blocking,preferred) ============================
fs.readFile("./03NodeJS-works/contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error reading file:",err);
    }else{
        console.log("Contacts File read Successfully (asynchronously):",result)
    }
});


console.log(1);
console.log(2);
console.log(3);
