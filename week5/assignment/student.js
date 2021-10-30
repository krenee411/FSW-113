// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Students{
    constructor(){
        this.studentName= document.querySelector("#studentName").value;
        this.className= document.querySelector("#className").value;
        this.scores= document.querySelector("#studentScores").value;
        this.possible= document.querySelector("#possibleScores").value;
        console.log(this.studentName, this.className, this.scores, this.possible)
    }

// The class should also contain the following methods:
// - a method that adds up all the student's scores
addScores(){
    currentGrade = this.scores.value
    for (i=0; i<currentGrade.length; i++){
        currentGrade[i] + 0

    }
    console.log(addScores())
}
// - a method that adds up all the possible scores
addPossible(){
   const possGrade = this.possible
    possGrade.reduce(currentValue, previousValue  => (currentValue + previousValue))
    console.log(addPossible())
}

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
letterGrade(currentGrade, possGrade){
    if ((currentGrade / possGrade) * 100 == 100) {
    document.querySelector("#certGrade").innerHTML = "A+"
}else if((currentGrade/ possGrade)* 100 <= 95){
    document.querySelector("#certGrade").innerHTML = "A-"
}else if((currentGrade/ possGrade)* 100 <= 90){
    document.querySelector("#certGrade").innerHTML = "B+"
}else if((currentGrade/ possGrade)* 100 <= 85){
    document.querySelector("#certGrade").innerHTML = "B-"
}else if((currentGrade/ possGrade)* 100 <= 80){
    document.querySelector("#certGrade").innerHTML = "C+"
}else if((currentGrade/ possGrade)* 100 <= 75){
    document.querySelector("#certGrade").innerHTML = "C-"
}else if((currentGrade/ possGrade)* 100 <= 70){
    document.querySelector("#certGrade").innerHTML = "D+"
}else if((currentGrade/ possGrade)* 100 <= 65){
    document.querySelector("#certGrade").innerHTML = "D-"
}else if((currentGrade/ possGrade)* 100 < 60){
    document.querySelector("#certGrade").innerHTML = "F"
    console.log(this.letterGrade)
}
}}