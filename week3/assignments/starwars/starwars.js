// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
var type

function fetchData(){
    var queryType = document.getElementById("queryType").value
    var itemID = document.getElementById("itemID").value
getFromSWAPI(queryType, itemID)
}

function getFromSWAPI(queryType, itemID) {
    type = queryType
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}


function updateInfo(data){
    console.log('data: ', data)
    console.log('type: ', type)
    var dataLabel1 = document.getElementById('dataLabel1')
    var dataLabel2 = document.getElementById('dataLabel2')
    var dataValue1 = document.getElementById('dataValue1')
    var dataValue2 = document.getElementById('dataValue2')

    if(queryType === "people"){
        dataLabel1.innerText = 'Person Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Eye Color:'
        dataValue2.innerText = data.height
    }else if(queryType === "planets"){
        dataLabel1.innerText = 'Planet Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Climate:'
        dataValue2.innerText = data.climate
    }else if(queryType === "starships"){
        dataLabel1.innerText = 'Starship Name:'
        dataValue1.innerText = data.name
        dataLabel2.innerText = 'Crew:'
        dataValue2.innerText = data.crew
    }

}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.