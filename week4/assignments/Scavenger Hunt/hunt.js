// Create an event listenter for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.
document.getElementById('submit').addEventListener('click',combineLists)

function combineLists() {
 var textareas = document.getElementsByTagName('textarea')
 console.log(textareas)
 var items= []
 for(i= 0; i<textareas.length; i++){
    var oneTextArea = textareas[i].value.split(',') 
   // console.log(oneTextArea)
    items= [...items,...oneTextArea]
 }
 items.sort()
console.log(items)
items.forEach(function(getItems) {
    let allItems = document.createElement('p')
    allItems.setAttribute('id', 'allItemsList')
    allItems.textContent += getItems
    document.getElementById('AllItems').appendChild(allItems) 
});
}
// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}
