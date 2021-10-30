// Declare any necessary variables.
var value= document.getElementsByTagName("text")
// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
var submit = document.getElementById('print').addEventListener('click', function(){
    let myStudent= new Students()
    //certStudentName(myStudent)
})
//  a new student object, and another function to print the certificate.

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
var reset = document.getElementById('reset').addEventListener('click', function() {
    return reset.value = " "

})

// Create a function that instantiates a new student object with the input from the HTML form.
function instantiateStudent() {

}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function printCertificate() {
    let myStudent= new Students()
    certStudentName(myStudent)
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function certStudent(){
    document.querySelector("#certStudentName").innerHTML = studentName
    document.querySelector("#certClassName").innerHTML = className
    document.querySelector("#certGrade").innerHTML = scores   
}
