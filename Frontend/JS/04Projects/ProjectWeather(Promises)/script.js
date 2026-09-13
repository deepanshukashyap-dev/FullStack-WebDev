const searchButton = document.getElementById('search-btn')  //for eventListner
const input = document.getElementById('city-input')        // to get city name and provide to the query

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')


//============================================= function to get data from the API Response ==================================================
async function getData(cityName){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7e84ecf20a4b4015a07183203252904&q=${cityName}&aqi=yes`);
    const data = await response.json();  // await the promise of response.json
    return data
}

// Event Listner on search searchButton to call the function to get the data of the entered city from the API response
searchButton.addEventListener('click',async() => {
    console.log(input.value);   //value by 'input.value' as entered by the user   

    const value = input.value;
    const result = await getData(value); //as getData is async fn we need to await it to get the data

    console.log(result);  //result have the json data

    //from the json result updating the html tags by '.innerText'
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`; 
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;

}) 



//================================================== Seprate code for Current location ======================================================
const currentLocation = document.getElementById('location-btn')


//Async funtion to get the data from the api using latitude and longitude
async function getLocationData(lat , long){  //passing two parameters
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7e84ecf20a4b4015a07183203252904&q=${lat},${long}&aqi=yes`);
    const data = await response.json();  // await the promise of response.json
    return data
}

//when got the permission run this
async function gotLocation(possition){    //make it async, as it calls the async func getLocationData
    console.log(possition); //return the whole possition object
    console.log("latitude:"+ possition.coords.latitude+ ", Longitude: " + possition.coords.longitude)//gives latitude and longitude from coords object

    const result = await getLocationData(possition.coords.latitude , possition.coords.longitude); //await the async function to get the data from the api using lat and long

    console.log(result); //print the json result(weather details of the given lat and long) , which is sycn or async?=> async as it is awaited
    
}
//when got failed run this..
function failedLocation(){
    console.log("Something went wrong!!");
}
//========================================= Event Listner on location button ========================================================
currentLocation.addEventListener('click', async() => {  //on click fetch the user location
    const response = navigator.geolocation.getCurrentPosition(gotLocation, failedLocation)  //takes 2 callbacks -> (1-success , 2-error)
})

 