const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
var detailsList = document.getElementById("detailsList")

parts.forEach(function(eachDetails){

    let partItem = document.createElement('div')
    detailsList.appendChild(partItem)

    let check = document.createElement("input")
        check.setAttribute("type","checkbox")
        partItem.appendChild(check)

    let partInfo = document.createElement('span')
        partInfo.textContent = (" Part: " + eachDetails.partNbr + ""+ " qty :" + eachDetails.qty)
        partItem.appendChild(partInfo)
       
})

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element


let getSpec = document.getElementById('specialPackaging')

let specialPackParts =  parts.filter(function(info){
    return (info.aisle === "B3") 
})
    if(specialPackParts.length != 0){
        specialPackParts.forEach(function(info){
            let spec = document.createElement('span')
            spec.innerHTML = ("<br></br>" +"Item:" + info.partDescr + " / " + info.qty)
        getSpec.appendChild(spec)
        })
    }else{
        getSpec.remove()
    }



     
// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

    var getHazMat = document.getElementById('hazardousMaterials')

let hazParts = parts.find(function(items){
    return items.aisle === "J4"
})
    if(hazParts){
        getHazMat.textContent = ("GET GLOVES!!")
    }else{
    items.remove()
}

   

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

    let getSmall = document.getElementById('smallItemsOnly')

let smallParts =parts.every(function(item){
    return item.aisle === "H1"
})
    if(smallParts){
            smallItem.textContent = (item.partDescr + "Bring a Backet to aisle H1") 
            getSmall.appendChild(smallItem)
    }else{
        getSmall.remove()
    }

   
// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

    let getHeavy = document.getElementById('forkiftNeeded')
    
    let heavyParts = parts.some(function(big){
        return big.aisle === "S"|"T"|"U"
    })
    if(heavyParts){
        forklift.textContent = ("**FORKLIFT NEEDED** " + big.partDescr)
         getHeavy.appendChild(forklift)
    }else{
        getHeavy.remove()
    }

// sum up the total number of parts and append that number to the text already in "totalItems" element

/*
function Total(){
    let tot= document.getElementById('totalItems')
    let sum = ""
parts.reduce(function(add){
    sum += add.qty
    if(add.qty > 0){ 
       sum += add.qty * 1
     tot += sum
    }

})
}
Total()*/
/*
function Total(){
    let tot= document.getElementById('totalItems')
    let sum = ""
    parts.reduce(function(add){
    add += [parts.qty] *1
    //if(parts[i].qty > 0){ 
      //  addNum += parts[i].qty * 1
      //  tot.appendChild(addNum)
tot.textContent += add
    })
}
Total()*/

function Total(){
    var totals = document.getElementById('totalItems')
    let sum = parts.reduce(function(totals,currentItems){
        return totals += currentItems.qty}, 0)
        totals.textContent += sum
    }
Total()
