console.log('hey there!');
        
const math = require('./maths');  // importing maths.js file and storing in variable
// const math = require('./maths'); // by storing the imported file in a variable we can access its exported func
console.log(math.addFn(2,4)); // calling the function exported from maths.js 
//my doubt is why we are able to call the function directly without storing it in a variable first
// Answer: When you require a module in Node.js, the module.exports object is returned. If the module exports a single function directly (like in maths.js), you can call it directly without storing it in a variable. However, if the module exports multiple members (like functions, objects, etc.), you would typically store it in a variable to access those members. In this case, since maths.js exports a single function, you can call it directly after requiring it.

console.log(math.subFn(5,9));
