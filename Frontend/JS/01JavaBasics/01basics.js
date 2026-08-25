
// console.log("hello world");


////Stack(Primitive)
// let youtubeName="youtube.com"
// let anotheName=youtubeName  //youtube.com   gives the copy

// anotherName="cycleCare"

// console.log(youtubeName)  //youtube.com
// console.log(anotheName)   //cycleCare


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

////Heap(NonPrimitive)
// let userOne= {  //object (non primitive data type)  , = {}
//     email:"Xaiverdox@gmail.com" ,
//     upi:"xy@ybl"
// }

// let userTwo = userOne
// userTwo.email="dev@google.com"

// console.log(userOne.email)      //email changed by changing in userTwo,user two me karne se userOne me bhi hogya
// console.log(userTwo.email)  


//++++++++++++++++++++++++ STRING +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(typeof("Hello"))    //string type
// console.log(typeof('Hello'))    //string type


// const name="dev "
// const projectCount=4

// console.log(name+projectCount+" project completed -->Bad way");  //concatination, this is bad way , Use ` ` backticks always `${}`

// console.log(`hello my name is ${name} my prject count is ${projectCount}`) //right way 

// console.log(`I made ${projectCount} project in hackathon`)



// let string= new String("xaiverDox")   //by the syntax 'new' the datatype will be object.
// console.log(typeof(string))
// console.log(string.toUpperCase())   //changes the copy not the orginal
// console.log(string[0])
// console.log(string)

//more  methods --> toLowerCase , charAt , indexOf , substring(st,end) , slice(st,end) `negative spprt`
//                   ,  trim()  ,  replace(kisko,kisse)  , includes()  , split(kise basis par)--> gives the array
//                      of splitted array based on given command 



// ++++++++++++++++++++++++ NUMBER +++++++++++++++++++++++++++++++++++++++++++++++++
// const score=123.53

// console.log(score.toString().length)  //lenght is the property and toString is fn
// console.log(score.toFixed(2))         //Returns a string
// console.log(score.toPrecision(3))     //gives precise value in string format

// const ride=Math.random()
// console.log(ride)  //Returns a number between 0 and 1
// console.log(ride*10)              // --> gives the number bw 0-10
// console.log(ride+1)               // --> gives the number bw 1-10
// console.log(Math.floor((ride*10)+1)) 

// *Formula to print random between range*
//--> Math.random()*((max-min)+1)+min     , max>min
// Let's try
// const max=6
// const min =1 
// console.log(Math.floor(Math.random()*((max-min)+1)+min))




// ++++++++++++++++++++++++ Date&Time +++++++++++++++++++++++++++++++++++++++++++++++++

// let target = new Date()
// console.log(typeof(target))
// console.log(target.toLocaleString())
// console.log(target.toLocaleDateString())

// console.log(target.toString())

//baaki bad me padhege 



// ++++++++++++++++++++++++ Array +++++++++++++++++++++++++++++++++++++++++++++++++
// methods of Array

// 1. push --> Add element to the existing Array at the last
// const myArr=[1,2,3,4,5,6]
// console.log(myArr)
// myArr.push(0)
// console.log(myArr)

// 2. pop--> Remove the last element of the array
// const myArr=[1,2,3,4,5,6,23]
// myArr.pop()
// console.log(myArr)

// 3.  unshift--> Add the element to the beginning of the array(bad method)
// const myArr=[1,2,3,4,5,6,23]
// myArr.unshift(34)
// console.log(myArr)

// 4. shift--> Remove the first Element , doesn't require parameter
// const myArr=[1,2,3,4,5,6,23]
// myArr.shift()
// console.log(myArr)

// 5. includes--> "Results a boolean" (whether the given element is present or not in Array)
// const myArr=[1,2,3,4,5,6,23]
// console.log(myArr.includes(22))  //false

// 6. index of--> Gives the index of the given element and if not found "gives -1"
// const myArr=[1,2,3,4,5,6,23]
// console.log(myArr.indexOf(3))

// 7. join--> Adds all the elements of an array into a string, separated by the "comma default"
// const myArr=[1,2,3,4,5,6,23]
// console.log(myArr.join(" "))  

//8,9,=>splice,slice ---> splice manipulate the original array while slice return the clipped part
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// animals.slice(2)       //doesn't work untill a container catch the output
// console.log(animals);

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]



//10.concat --->Combines two or more arrays. This method returns a new array not modify
//                the original arr just like the pop , push , unshift, shift 

// const week=["Monday","Tuesday","wednesday","thursday"]
// const month=["Jan","Feb","March","April"]
// week.push(month)
// console.log(week)   //add the month array as a "single element" in week array

// week.pop()

// const newArr=week.concat(month) //concat method returning a new array thats why we need
// console.log(newArr)             // a container to catch the output .
     // or
// console.log(week.concat(month)) //is same as upper ones as it gives a new arr


// Concat ki jagha ham spread operator prefer karege kyunki wo ek se jyada add kar sakta hai 
// (BEST PRACTICE)

// const arr3=[1,2,3,4]
// const arr4=[5,6,7,8]
// const arr5=[25,36,57,68]
// const concat_arr1=[...arr3,...arr4,...arr5]
// console.log(concat_arr1)

// const arr1=[1,2,3,4]
// const arr2=[5,6,[7,8]]
// const concat_arr=[...arr1,...arr2]
// console.log(concat_arr)



//Abb ham dekhege flat function ko jo ki complex arrayy ko solve karsakta hai
//(inshort array ke andar array ko flat kardega, open kardega) .
// const complex=[1,2,[3,4,6],4,[1,[7,89,97]]]
// const flat=complex.flat(Infinity)   //hame depth dene hoti hai ki kitni dept tak sort karega array ko
// console.log(flat)
 
//IMP array function---> push,pop,shift, [spread opr..., join , flat ]

// const name="devOx"
// console.log(Array.isArray(name))  // ---> Gives boolean according to check isArray
// console.log(Array.from(name))     // ---> Returns array of the string
// console.log(Array.from({name:"dev"})) //---> Reurns empty array

// score1=100
// score2=200
// score3=230
// score4=124
// console.log(Array.of(score1,score2,score3,score4))  //---> Returns a new array from a set of elements



// ++++++++++++++++++++++++ Object +++++++++++++++++++++++++++++++++++++++++++++++++

// const user={
//     name:"Xaiver",
//     "full Name":"Xaiver Dox",
//     email:"xaiverdox@gmail.com",
//     age:20,
//     isLoggedIn:true,
//     lastLoginDays:["Monday","Tuesday","Wednesday"]
// }

// console.log(user.email)  //xaiver dox

// console.log(user["email"])  //"xaiver dox"  ye wala method tab use hota hai jab "key me space hota hai" ,ya fir hame key ki value nahi pata hoti ya fir 

// console.log(user["full Name"])  //Xaiver Dox

// .............................................................................................................................

// symbol ko key ki tarha use karne ke liye hum square bracket use karte hai.

// const mySym=Symbol("key1")

// const user1={
//     name:"deepanshu",
//     "full Name":"Xaiver Dox",
//     email:"xaiverdox@gmail.com",
//     [mySym]:"myKey1",  //using symbol as key
//     isLoggedIn:true,
//     lastLoginDays:["Monday","Tuesday","Wednesday"]
// }

// console.log(user1[mySym])  
// console.log(user1)


// user1.email="xaiverdox@chatGpt.com"

// Object.freeze(user1) //This will freeze the object and make it immutable(not changeable)
// user1.email="xaiverdox@google.com" //no change
// console.log(user1.email)



// user1.greeting=function(){
//     console.log(`Hello my name is ${this.name}`);
// }
// console.log(user1) 
// console.log(user1.greeting())  //calling the function inside the object

// console.log(user1["greeting"]())  //same as above  "ye hamne isliye use kiya kyunki function ko call karne ke liye hame key ki value nahi pata hai"



// ye hamne jo objects padhe wo singleton objects the , ab ham multiple objects padhege



// ++++++++++++++++++++++++ Object Constructor +++++++++++++++++++++++++++++++++++++++++++++++++


// const tinderUser=new Object()    //ye ek empty object hai or ye single ton object hai
//                     AND
// const tinderUser={}           //ye Non singleton object hai

// tinderUser.name="Xaiver Dox"
// tinderUser.id="124abc"
// tinderUser.isLoggedIn=false

// console.log(tinderUser)




// // ................................................................................................................................

//object ke andar object(Object nesting)

// const regularUser={
//      email:"xaiver@gmail.com",
//     fullname:{
//           userfullname:{
//                firstname:"dev",
//                lastname:"dox"
//           }
//     }
    
// }
// console.log(regularUser.fullname.userfullname.firstname)  //dev
// console.log(regularUser.fullname.userfullname.lastname)   //dox



// ................................................................................................................................
//Adding two or more objects together

// const obj1={a:1,b:2,}
// const obj2={c:3,d:4}
// const obj3={e:5,f:6}

// const obj4={...obj1,...obj2,...obj3}  //spread operator,easy method use always this instead of Object.assign
// //                       or same as
// const obj5 = Object.assign({},obj1,obj2,obj3)  //Object.assign method, here {} is the target object where we want to merge all the objects

// // console.log(obj4) // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
// console.log(obj5) // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


// ........................................................................................................................................................









//..........................................................Array of Objects..............................................................................


// const users=[
//      {
//           email:"dev123@gmail.com",
//           id:1
//      },
//        {
//           email:"dev123@gmail.com",
//           id:1
//      },
//        {
//           email:"dev123@gmail.com",
//           id:1
//      }
// // we can add as many objects as we want in the array
// //we can extract the data from the array of objects using loop-- forEach, map, filter, reduce etc..
// ]  



// ...................................................................................................................................................




// const newUser={
//      name:"deepanshu",
//      email:"dev122@g.com",
//      id:23,
//      isLoggedIn:false,
//      city:"agra"
// }
// // console.log(Object.keys(newUser))  //gives the keys of the object in array format
// console.log(Object.values(newUser))  //gives the values of the object in array format
// console.log(Object.entries(newUser))  //gives the key value pair in array format

// for(const key in newUser){
//      console.log(newUser[key] ) //gives the values of the object
// }





// .....................................................Functions.................................................................................................
// function addTwoNumbers(num1,num2){
//      console.log(num1+num2)
// }
// addTwoNumbers(2,1)

// result=addTwoNumbers(2,3) //undefined because function doesn't return anything

// function addTwoNumber(num1,num2){
//      return num1+num2;
// }
// result=addTwoNumber(2,5)
// console.log(result)



// function loginUserMessage(name="dev"){
//      console.log(`${name} just logged in`)
     
// }

// loginUserMessage("xaiver")  //  we passed the argument "xaiver" it overrides the default value


//ab rest operator ka use karte hai jo ki function ke parameter me use hota hai

// function calculateCartprice(item1,item2){
//      return item1+item2
// }
// //sirf 2 item add hoge ,leken for ecom project hame pta nhe hota user kitne item add karega
// //cart me ,hame sirf sabki price total karni hoti.
// console.log(calculateCartprice(100,200,400,500))  //ye overflow horhi ,iske liye ham rest opr use karenge


// function addCartPrice(...items){  //rest operator gives the array of all the arguments passed to the function
//      return items
// }
// console.log(addCartPrice(100,200,300,152)) //ye arguments hai,suppose user add the items worth this much
//                                            //to ye sab price haamare paas array me aajaygi or hum array se fetch karlenge


//Passing objects to the function.................................................................................................
// const user={
//      name:"xaiver",
//      price:299
// }

// function handleObject(anyObject){ //argument me dhayn se object hi pass karna
//      console.log(`Username is: ${anyObject.name} and Price is: ${anyObject.price}`)//fetching
// }

// handleObject(user) //Parameter me hamne "user" object pass kiya
// //or hum user ki jagha direct object bhe likh sakte bina pehle se object bnakar


//Passing Array to the function.......................................................................................................

// const myArr=[1,2,3,4,5]
// function fetchElement(anyArr){
//      console.log(anyArr[1])
// }
// fetchElement(myArr)  //function me array pass kardiya or function arr se 2nd element fetch kar rha hai




//...............................Scope in Function................................................................
// there are two types of scope in javascript
// 1. Global Scope  
// 2. Local Scope
// Global Scope: Variables declared outside of any function or block are in the global scope.

// let globalVariable = "I am a global variable";
// function localScopeExample() {
//     let localVariable = "I am a local variable"; // This variable is only accessible within this function
//     console.log(globalVariable); // Can access global variable
//     console.log(localVariable); // Can access local variable
// }


//...............................Scope Level and mini hoisting................................................................
// we can excess the parent function parameters in child scope but cann't excess child parameter in parent scope


// Two methods to create the function:

// // 1.)
// // console.log(addOne(4))  //just like this , me isko pehle call kar rha 
// function addOne(value){
//      return value+1
// }
// // console.log(addOne(5)) //isko me function defination ke bad bhe call karsakta or pehle bhe (No Error)

// // 2.)
// // console.log(addTwo(2))  //ERROR! Cannot access 'addTwo' before initialization
// const addTwo=function(value){
//      return value+2
// }
// console.log(addTwo(3))