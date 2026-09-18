const clock = document.getElementById('clock');
const start = document.getElementById('start');
const stopbtn = document.getElementById('stop');

function showTime(){
    const time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

    console.log(currentTime); //for console 

    clock.innerText = currentTime;
}

let intervalTime;
start.addEventListener('click',() => {
    showTime();
    intervalTime = setInterval(showTime,1000);
})

stopbtn.addEventListener('click',() => {
    clearInterval(intervalTime);
})