const functions = {
  gradeClassifier: (grade) => {
    
    if(typeof grade === "number") grade = grade.toFixed(2)

    if(grade >= 95 && grade <= 100) return "O"
    else if(grade >= 90 && grade <= 94.99) return "V"
    else if(grade >= 85 && grade <= 89.99) return "G"
    else if(grade >= 80 && grade <= 84.99) return "S"
    else if(grade >= 75 && grade <= 79.99) return "N"
    else if(grade >= 0 && grade <= 74.99 && grade !== null) return "D"
    else return null
  }
}

module.exports = functions;
