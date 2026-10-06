https://expressjs.com/en/guide/routing.html

In this we are importing express to make the structural flow easy and the work 
of handler which is initially done by us from scratch , now express will take care
of that..

1.npm i express
2.const express = require("express");
3.Make a function myHandler{...} and paste all the call back function inside handler
and then in the http.createServer pass its refrence http.createServer(myHandler);

4. const app = express();

now no need of bade bade function having the complexity like pehle hame url 
ko import karna pad rha tha req.url ke liye or query kee liye ,
alag alag routes ke liye switch cases bannane pad rhe the of fir if else for
difffrent req.method , express solve everything , query ki bhi chinta nhe karni
code become clean , optimize


// no need to install url module and http module separately
// express will take care of that




summary:
1.Code becomes clean , modular , optimize..
2.Routes ko handle karna bahut easy hojaata hai
3.Har cheez built-in hai
4.const myServer = http.createServer(handler..callbackFn);
  myServer.listen(8000,() => console.log("server started!"));
  ====== ye sab karne ki bhi zarurat nhe hai, matlb http ko import bhi nhe karnaa
  alag se server bananer ke liye or server start karne ke liye ,
  only ** app.listen(8000,() => {console.log("server started!")}); ** will create
  the server and start on the port 8000 and "url module bhi install karne ki need nhe hai"
  
  #The listen method is inbuilt in express, it creates and starts the server
  in one go

  In the node listen is used to bind the server to a port and hostname
  and start listening for connections
  In the express listen method is a convenience method that does the same thing
  but also allows you to pass a callback function that will be executed once
  
  #Is the listen works same in both node and express? 
  =yes , but in express its more convenient
  as it creates and starts the server in one go



The npm i url is package or module?
=it is a module that provides utilities for URL resolution and parsing.