// how to change the path \full stacks\NodeJS>  from this to this \full stacks\NodeJS\04Server>
// run the command: cd 04Server



//http is the built in module of nodejs which helps to create server to handle client requests, send responses, host website/web application, etc.
const http = require("http");
const fs = require("fs");
const url = require("url");


//Creating server
const myServer = http.createServer((req,res) => {
    //req: for client side all data , res: for to send the response to the server
    console.log("New Request received! "); //ignore
    const log = `${Date.now()}: ${req.method} ${req.url} New Req is received\n`;
    const myUrl = url.parse(req.url,true); //converting URL string into url obj , true karne se query bhi mil jati hai
    console.log(myUrl); //ignore

    fs.appendFile("log.txt", log, (err)=>{   //03NodeJS-Works(file handling-blocking/nonBlocking)
        if(err){
            console.log("Error!: ",err);
        }else{
            console.log("log is successfully append to file log.txt(Asynchronously)");
            switch(myUrl.pathname){
                case '/': 
                    if(req.method==='GET') res.end("Home Page");
                    break;
                case '/about': 
                    res.end("About Page");
                    break;
                case '/signup':  //05HTTP-Methods
                    if(req.method==='GET') res.end("SignUp Page"); 
                    else if(req.method==='POST'){
                        //DB query
                        console.log("SignUp Successful!!");
                        res.end("SignUp Successful");
                    }
                default:
                    res.end("404");

            }
        }
    })
});

//for running the server we need a port number
myServer.listen(8000,()=>console.log("Server Started!")); // callback to console is optional

