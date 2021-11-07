// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade
export default function convert(kelvin,location){
if (location == "US"){
return((kelvin-273) * 9 / 5 + 32).toFixed(2) + " F"
}else{
    return (kelvin-273).toFixed(2) + " C"
}

}
//sys.country