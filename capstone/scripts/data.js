// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
//**systemDiv-- is where all the parentID 0 goes- or will be populated
var firstDrop = document.querySelector("#system") //first option dropdown
var secondDrop = document.querySelector("#subSystem")// second option dropdown
export var data;
var first;
var second;


//const data = require("./../data.json")
//import data from "./data.json"
//console.log(data)

async function getSystems(parentID, DOM) {
    let wait;
    const getFetch = await fetch("./data.json")
    wait = await getFetch.json()
      data = wait
    
     var filterData = data.systems.filter((object) =>{ // this is going to add the options to the dropdown box
        if(object.parentID == parentID){
            return object
        }
    
    })

    populateDD(filterData, DOM)

    // >This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // >Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // >After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // >this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 
    //make a string a number with praseInt()
}
getSystems(0,firstDrop);

firstDrop.addEventListener("change", function(){
    let first = firstDrop.selectedOptions[0].text
    console.log(first)
})

secondDrop.addEventListener("change", function(){
    let second = secondDrop.selectedOptions[0].text
})


function populateDD(filterAry, DOM) {
    DOM.add(new Option ("Select an Item",""))
    filterAry.forEach(obj => {
        var newOption = new Option(obj.sysName, obj.sysID)
            console.log(newOption)
            DOM.add(newOption)
    })
    //**does it only get the matching parentID since we are calling on the firstdrop? 
    

    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).
}

document.querySelector('#system').addEventListener("change", (e) => { //this e if for event
    secondDrop.innerHTML = ""
    getSystems(parseInt(e.target.value),secondDrop);

    
    /*
    for(var i = 0; i<data.systems.length; i++){
        var obj= data.systems[i]
    if(obj.parentID === parseInt(e.target.value)){ 
        var newOption = new Option(obj.sysName, obj.sysID)
            console.log(obj)
            secondDrop.add(newOption)//**does it only get the matching parentID since we are calling on the secondDrop?   
        //console.log(data.systems[i].parentID)
    }
} */

}
    // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.
)

