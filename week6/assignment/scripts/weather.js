// import the convertTemp.js and getDaylight.js scripts with their default export

import dayOrDark from "./getDaylight.js"
import convert from "./convertTemp.js"
import dayOrNight from "./getDaylight.js";

// declare any variables needed
var data;

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", () => getData())
// create a function that calls the function that queries the api 
async function fetchData(){
    var city = document.querySelector('#city').value
 let getFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79e5742868129e88f31b9ef25bee0fe9`)
        data = await getFetch.json()
        return data;
}

// and then creates promises that will call a function to write the weather data to the HTML page        
function getData(){
    fetchData() 
        .then(response => returnedData(response)) 
}
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
function returnedData(retrived){
    console.log(retrived)
    var temp = convert(retrived.main.temp, retrived.sys.country ) 
    var humidity = retrived.main.humidity
    var conditions = retrived.weather[0].main
    var time = retrived.dt
    var sun = retrived.sys.sunrise
    var moon = retrived.sys.sunset

    fillInTheBlank(temp, humidity, conditions, time, sun, moon)
}
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function fillInTheBlank( t, h, c, ti, s, m){
    document.querySelector('#tempData').innerHTML = t
    document.querySelector('#humidData').innerHTML = h
    document.querySelector('#conditionsData').innerHTML = c
    if(ti > s && ti < m){
    document.querySelector('.weatherWrapper').style = `background-color:${dayOrNight(true)}; color: white; border-radius: 8px;`
    }else{
        document.getElementsByClassName('weatherWrapper').style = `background-color:${dayOrNight(false)}; color: white; border-radius: 8px;`
        }


}