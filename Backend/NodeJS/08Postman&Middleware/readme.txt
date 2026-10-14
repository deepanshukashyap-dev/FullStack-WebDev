//Project completion of 07RestApi

postman is a tool for testing APIs. It provides a user-friendly interface to send requests and view responses, making it easier to develop and debug APIs. With postman, you can create collections of requests, automate tests, and collaborate with team members. It supports various HTTP methods, authentication types, and data formats, making it a versatile tool for API development.

we use post to test post , patch , delete requests 




We use middleware to parse the body of the request, backend me data bhejna hai to body me bhejte hai
Q.Middleware kaam kya karta hai in simple words
=> jo data humare request ke sath jata hai usko parse karna

express.json() ek middleware hai jo json data ko parse karta hai
similarly express.urlencoded() form data ko parse karta hai
yeh middleware hum app.use() ke through use karte hai

//Using Middleware to parse the body of the request
app.use(express.urlencoded({ extended: false })); //extended:false means simple key value pairs,and estended:true means nested objects


Client (Postman / Frontend)
        ↓
req.body (new user data)
        ↓
users.push()  → memory update
        ↓
fs.writeFile() → disk update
        ↓
res.json() → response client ko

Middleware kaam karta hai req.body me data ko parse karne ka taaki hum us data ko easily access kar sake apne route handlers me
Middleware in industry projects ex:
=> body-parser package (popular middleware for parsing request bodies)
=> cors package (middleware for enabling Cross-Origin Resource Sharing)
=> morgan package (middleware for logging HTTP requests)
=> helmet package (middleware for securing HTTP headers)
=> express-session package (middleware for managing user sessions)
=> multer package (middleware for handling file uploads)
=> passport package (middleware for authentication)
=> rate-limit package (middleware for limiting repeated requests to public APIs)
=> compression package (middleware for compressing response bodies for better performance)






// what is status code?
Status codes are three-digit numbers returned by the server to indicate the result of an HTTP request. They help clients understand whether a request was successful, encountered an error, or requires further action.
Some common status codes include:
- 200 OK: The request was successful, and the server returned the requested data.
- 201 Created: The request was successful, and a new resource was created.
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 401 Unauthorized: The client must authenticate itself to get the requested response.
- 404 Not Found: The server could not find the requested resource.
- 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.

to set status code in express.js, we use res.status(code)
Example: res.status(201).json({ message: 'User created successfully' });



*NodeMon , is a utility that starts the server, and watch any changes in the file, and automatically restarts the server whenever any changes are detected