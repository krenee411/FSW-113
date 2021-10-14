var monthName = ["January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var options = monthName.map((month, index) =>
    `<option value = ${index + 1}> ${month}</option>`
)


options.forEach(function(mons){
    document.getElementById("month").innerHTML += mons
})

//document.getElementById("month").innerHTML = options

document.getElementById("printCalendar").addEventListener("click", printCalendar)



function printCalendar(){
    document.getElementById("calendarDays").innerHTML = ""
    const monthNumber = document.getElementById("month").value
    const yearNumber = document.getElementById("year").value
    //const firstDay = document.getElementById(`${monthNumber}/1/${yearNumber}`)
    const calDate = new Date(`${monthNumber}/1/${yearNumber}`)

let days
switch (monthNumber) {
    case 1: 
        days = 28
        break
    case 3:
    case 5: 
    case 8:
    case 10:
        days = 30
        break
    default:
        days = 31
}
let x 
const weekday = calDate.getDay()
for (x=0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class = 'blankDay'>&nbsp;</div>"
}
let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div>`
} while ( dt < days)

const monthName = calDate.toLocaleDateString('default', {month:'long'})
const year = (calDate.getFullYear())
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}
}

window.onload= function display(){
    const monthNumber = document.getElementById("month").value = 1
    const yearNumber = document.getElementById("year").value = 2021
    
}
//i can get the date to prepopulate but I cant figure out how to make it actually display? can you point me in a direction?




