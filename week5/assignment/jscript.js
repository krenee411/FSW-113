// Declare any necessary variables.

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate

document.querySelector('#print').addEventListener('click',() => certStudent(newStudent()))

//  a new student object, and another function to print the certificate.

function newStudent(){
let studentName = document.querySelector('#studentName').value;
let course = document.querySelector('#className').value;
let scores = convert(document.querySelector('#studentScores').value);
let possScore = convert(document.querySelector('#possibleScores').value);
   return new Students(studentName,course,scores, possScore)
}
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", reset())

function reset(){
  var clearInfo = [...document.querySelectorAll("input")]
  clearInfo.forEach(function(e, i){
    clearInfo[i].value = ""
  })
  var clearCert = [...document.querySelectorAll(".cert-data")]
    clearCert.forEach(function(e, i){
      clearCert[i].innerHTML = ""
    })
  }


// Create a function that instantiates a new student object with the input from the HTML form.
function certStudent(studentInfo) {
  document.querySelector("#certStudentName").innerHTML = studentInfo.getName()
  document.querySelector('#certClassName').innerHTML = studentInfo.getCourse()
  document.querySelector('#certGrade').textContent = studentInfo.letterGrade()
  console.log(studentInfo)
}


// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function convert(array){
 return array.split(",").map(e => parseInt(e))
}
