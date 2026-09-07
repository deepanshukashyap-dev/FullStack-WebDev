const promiseOne = new Promise(function(resolve,reject){
    // Do an Async Task 
    setTimeout(function(){
        console.log('Async task is completed')  
        resolve() 
    },1000)
})
promiseOne.then(function(){
    console.log('promise consume');
    
})




promiseTwo= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})




const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){  
        resolve({username:'dev', email:'dev@gmail.com' })    
    },1000)
})
promiseThree.then(function(user){
    // console.log(user)
})




const promiseFour = new Promise(function(resolve,reject){  //resolve is connected with then and reject is connected with catch
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name:'deep', email:'deep@gmail.com'})
        } else{
            reject('Error Something Went Wrong!!')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.name // ye jaa khah rha hai , agar ek var me dalde promiseFour.then to kya usme ja rha ye return?= no.. , chaining of .then
}).then((usrname) => { //jo upar wala return kar rha hai wo idhar aayga as argument
    console.log(usrname);  
}).catch(function(error){  //jo reject dega wo catch me aajayga , or reject ye de rha tha upar " reject('Error Something Went Wrong!!') "
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolve or rejected')
})  // ya to then chalega after resolve ya toh catch chalega after reject warna finally to chalega hi chalega




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javaScript", password: "123"})
        }else{
            reject("ERROR:JS Went Wrong!!")
        }
    },1000)
})
//promiseFive.then() , there is one more syntax other than " .then .catch " which is async await isme error handle ke liye try catch use hoga
async function consumePromiseFive(){
    try {   //if no error then await promiseFive se jo resolve me hoga wo aajayga or usko variable me store kar lege"response"
        const response = await promiseFive
        console.log(response);
    } catch (error) {    //agar error true hai to reject jo return karega wo catch me aajaygi , doubt is that ki .then .catch me hum catch me callback fn use kaarte the leken isme kyu nhe use ho rha callback function catch me
        console.log(error);
    }
}
consumePromiseFive()   //function execute karwana hoga isme  (koi bhi use karsakte , async await try catch ke saath ya fir .then .catch resolve reject k saath)



//promise 5 from json api by async await try catch
async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //.json me karne ke liye bhi time lagta hai isliye await ka use karna padega yhah bhhi
        console.log(data)
    } catch (error) {
        console.log("E:" , error)
    }
}
getAllUser()



// by .then .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json()
})
.then((response) => {
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})
//why we use two then in 