//import {data} from "./data.js"
// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var data;

class Bug {
    constructor(reportBy, sysDiv, subDiv, bugDiv) {
        this.reportBy = reportBy;
        this.sys = sysDiv;
        this.sub = subDiv;
        this.bug = bugDiv;
        //**you need to have gets and sets here 
        // This constructor should be set up to accept the four user-input values from index.html: 
        
    }
    getReport(){
        return this.reportBy
    }
    getSys(){
        return this.sysDiv
    }
    getSub(){
        return this.subDiv
    }
    getBug(){
        return this.bugDiv
    }

    addBug(info) {
        
        var wrapper = document.querySelector("#listWrapper") 
        var newDiv = document.createElement("div")
        newDiv.setAttribute("id", "newDiv")
        wrapper.appendChild(newDiv)
        newDiv.append(info)  

        var deleteBtn = document.createElement("BUTTON")
        deleteBtn.setAttribute("id", "deleteBtn")
        let x = ("&#10006")
        deleteBtn.innerHTML = x 
        deleteBtn.addEventListener("click", this.deleteBug)
        newDiv.appendChild(deleteBtn)
        
        var resBtn = document.createElement("BUTTON")
        resBtn.setAttribute("id", "resBtn")
        let c =  ("&#10004")
        resBtn.innerHTML = c
        resBtn.addEventListener("click", this.resolveBug)
        newDiv.appendChild(resBtn)
           
        
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 

    }

    deleteBug(e) {
       // console.log(e.target.parentNode)
        e.target.parentNode.remove()
            
        }
        

        //**get item by the id with a querySelector()
        //**and remove it with the removeChild() method
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    
        resolveBug(e) {
            //console.log(e.target.parentNode)
            e.target.parentNode.style.backgroundColor = "black"
            e.target.parentNode.style.color = "white"

            
               //i need to add somthing here so when clicked it will change the color with .style.color = "black"
           
           //**document.quesySelector("bugId_"+somthing.getId()).style.color = "black"
           // Create code that changes the appropriate bug report to a darker color
       }

  
}
async function getSystems(parentID, DOM) {
    let wait;
    const getFetch = await fetch("./data.json")
    wait = await getFetch.json()
      data = wait
}
getSystems();

function reportBug() {
    
    let report = document.querySelector('#reportedBy').value;
    let sys = document.querySelector('#system').value; //how do i get my on change to work in this function
    let sub = document.querySelector('#subSystem').value;
    let bug = document.querySelector('#bugDesc').value;
    var newBug = new Bug(report,data.systems[parseInt(sys)-1].sysName,data.systems[parseInt(sub)-1].sysName,bug)
    //console.log(data)
    // console.log(sys)
    // console.log(parseInt(sys)-1)
    // console.log(data.systems[1])
    // console.log(data.systems[parseInt(sys)-1].sysName)

    newBug.addBug(("Reported by: " + newBug.reportBy + "\n "
     + " System:" + newBug.sys +"/ "+ newBug.sub +  "\n"
     + "Message:" +  newBug.bug + "\n"))
    return false;
   // document.querySelector("#submitBtn").addEventListener("click", () =>{
      // var myDiv =  document.querySelector("#newDiv")
       //myDiv.innerHTML = ("Reported by: " + report + " System: " + sys +"/ "+ sub + "Message: " + bug)
      //  console.log(myDiv)
   // })
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
}

