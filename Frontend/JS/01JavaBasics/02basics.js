let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = "dev"

// console.log(`${str1} ${str2} `
// )

const newUser = {
    name:"piyush",
    email: "piyush@google.com",
    phoneNo:9832532325,
    age: 19,
}
// console.table(newUser)



// console.log(Object.keys(newUser))  //returns a list of all keys of newUser

let list = Object.keys(newUser) // returns a list of all the keys , which make easy to iterate in loop

for (let i = 0 ; i<list.length ; i++ )
{
    // console.log(list[i]); //for fetching keys from the key list
    // console.log(newUser[list[i]]); //for fetching the values by the help of keys
}


//======================================= Object Destructure(imp) ===================================================


const {name:nm} = newUser
const {email:em} = newUser
const {phoneNo:no} = newUser
const {age:ag} = newUser

console.log(nm)    //is same as --> console.log(newUser.name)
// console.log(em)
// console.log(ag)




//=========================================== Functions and Parameters =============================================

// function addTwoNumber(a,b){      //a,b are parameters  
//     return a+b
// }
// sum=addTwoNumber(2,3)            // 2,3 are arguments
// console.log(sum);


function loginUsermessage(username){
    if(!username){
        console.log("Please Entyer a valid Name ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("Xavier"))





//==================================== Rest Operator ============================================================

function calculateCartPrice(...item){
    return item
}
// console.log(calculateCartPrice(1200,255,365,247,438));   //gives the array of all added item price





//===================================== Passing Object to the Function =============================================
const hackUser = {
    name : "DevOx",
    projectCount : 5
}

function handleObject(anyObject){
    return `Username is ${anyObject.name} and project completed: ${anyObject.projectCount} `
}

// console.log(handleObject(hackUser))





//===================================== Passing Array to the Function =======================================

// const myArray = [1,2,34,6]

// function printArrayElement(getArray){
//     return getArray[3]
// }
// console.log(printArrayElement(myArray));









//========================================= Arrow Function ======================================================

// (i) Explicit return
// const addTwo = (a,b) => {
//     return a+b
// }  
// console.log(addTwo(2,5))



// (ii) Implicit return
// const addTwo = (a,b) => ( a + b )      // Syntax : const varName = (x,y) => {}
// console.log(addTwo(2,5))


//for returning object to the function Wrap in curly brackets
// let userTwo = (num1, num2) => ( {name:"devOx"} )  

// console.log(userTwo(" "));


// IIFE   ( () => {} ) ();
// ( (name) => {
//     console.log(`hello ${name}`) 
// } ) ("dev");

( (num1,num2)=>{
    console.log(num1+num2);
} ) (2,3);



//=================================== ForEach Loop ============================================================

// const language = ["HTML", "CSS", "JS", "C", "Python", "CPP", "Django", "BootStrap", "TalwindCSS", "React"]

// language.forEach( (item) => { //loop me hamne callback function di hai , jisme har ek item ko access kr skte hai
//     console.log(item);
    
// } )


// NOTE :- ForEach loop doesn't return anything , gives undefine on storing in a variable and printing



//=========================================== Basics of Filter ========================================

// NOTE :- filter returns byself and it needs a callback fn containing the each access value with the condition
// ,those satisfy the condition returned by filter , it returns a new array containing those values only

// const nums = [2,3,4,56,6,3,15,20]

// const fetch = nums.filter( (number) => {
//    return number>3   //curly bracket lga denge to return karna hi hoga , paranthesis hote to nhe karna hota
//  } )

// console.log(fetch);


// Alternative use of Filter
// const myNums = [2,3,4,56,6,3,15,20]
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);




// More use of Filter in the Database for fetching in objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBook = books.filter( (bk) => bk.genre=="History" )

// userBook = books.filter( (bk) => {
//     return bk.publish>=1980 && bk.genre=="Non-Fiction"      // Using the return keyword bcz we opened a scope here by curly bracket
// } )

// console.log(userBook);


// Note: Use filter for fetching from the database and use map for extracting things with given changes
// filter wo return karta hai jo true hota hai , or iterate bhi us par hi karta hai.. Map sab par iterate karta hai
//===================================== Map =============================================================
// let iter = [1,2,3,4,5,6,7,8,9,10]
// const newIter = iter.map( (num) => {
//     num+10
// } )

// console.log(newIter);



//Alternate use of Map by For each loop
// let iter1 = [1,2,3,4,5,6,7,8,9,10]
// const newIter1 =[]
// iter1.forEach( (num) => {
//     newIter1.push(num+10)
// } )
// console.log(newIter1);






//======================= Using .reduce to calculate the cart price =============================================
// it has default parameter accumulator and item to iterate

// let nums = [1,2,3,4]
// const myTotal = nums.reduce( (acc , curval) => {
//     return acc+curval
// } , 0 )

// console.log(myTotal);


//using reduce in object of cart

const shoppingcart = [
    {
        itemName: "Js Course",
        price: 1999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Django Course",
        price: 1000
    },
    {
        itemName: "Java Course",
        price: 1999
    },
]

const cartTotalPrice = shoppingcart.reduce( (acc,item) => (acc+item.price),0 )
console.log(cartTotalPrice);


