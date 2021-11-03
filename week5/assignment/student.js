// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Students{
    constructor(name, course, scores, possible){
        this.name= name;
        this.course= course
        this.scores= scores;
        this.possible= possible;
       // console.log(this.studentName, this.className, this.scores, this.possible)
    }

// The class should also contain the following methods:
// - a method that adds up all the student's scores
getName(){
    return this.name
}
getCourse(){
    return this.course
}


addScores(){
    return this.scores.reduce((possGrade, currentGrade) => (possGrade + currentGrade))
}
// - a method that adds up all the possible scores
addPossible(){
    return this.possible.reduce((possGrade, currentGrade) => (possGrade + currentGrade))
}

// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
letterGrade(){
    var now = (this.addScores()/this.addPossible()) *100
    if (now > 90) return "A"
    if (now > 80) return "B"
    if (now > 70) return "C"
    if (now > 60) return "D"
    else return"F"

}
}