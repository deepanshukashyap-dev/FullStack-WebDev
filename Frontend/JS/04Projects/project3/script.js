
//=============================== Query selectors =====================================================
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const body = document.querySelector("body");


//====================== Random HexCode generating ===================================================
const randomColor = function(){
    const hex = '0123456789ABCDEF';  //string of all hexCharacter 0-15 index
    let colorParts = ['#'];         // Array of random generated hexChar stored in this


    for(let i=0 ; i<6; i++){
        const randomIndex = Math.floor(Math.random()*16); //random num for indexing

        let randomChar = hex[randomIndex];   //storing the random indexed char in randomChar from the 'hex' string
        colorParts.push(randomChar);  //pushing each color part to the array
    }
    return colorParts.join("")  //joining the list of charater in string using the .join()
}
console.log(randomColor()) //for console only




//========================== for changing the bg color ===============================================
let intervalTime; 
const startChangingColor = function(){
    const changeBg = function(){ //changeBg is the function for giving in setInterval
        document.body.style.backgroundColor=randomColor();
    }
    intervalTime= setInterval(changeBg,200); //changeBg is the function refrence
    
    console.log(randomColor()); //for console only
}

//========================== for stopping the changing color ===========================================
const stopChangingColor = function(){
    clearInterval(intervalTime) //taking the identifier of the repeated action you want to cancel
}

// Clicking behaviour of start and stop button, taking the "event" and 'fun..refrence'
startButton.addEventListener('click',startChangingColor);
stopButton.addEventListener('click',stopChangingColor)