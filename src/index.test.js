const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('matching numerical grade to letter grade', () => {
  test.each([
    [95, 100, "O"],
    [90, 94.99, "V"],
    [85, 89.99, "G"],
    [80, 84.99, "S"],
    [75, 79.99, "N"],
    [0, 74.99, "D"],
  ])("when the grade is %i to %f, then the output should be %s", (a, b, expected) => {
    //Arrange
    let grades = []
    for(let i = a; i <= b; i++){
      //from range X to Y
      grades = [...grades, i]
    }
    //includes the last number in case it was a float.
    grades = [...grades, b]
    let expectedArr = Array(grades.length).fill(expected)
    
    //Act
    let actualArr = grades.map(item=>gradeClassifier(item))

    //Assert
    expect(actualArr).toStrictEqual(expectedArr);
  });

  test.each(
    [-1, -999, 101, 9999, "a", "b", null, undefined],
  )("when input is invalid (%p), it should output null", input=>{
    //Arrange
    const expected = null
    
    //Act
    const actual = gradeClassifier(input)

    //Assert
    expect(actual).toBe(expected)
  })

  test.each([
    [94.995, "O"],
    [94.994, "V"],
    [89.995, "V"],
    [89.994, "G"],
    [84.995, "G"],
    [84.994, "S"],
    [79.995, "S"],
    [79.994, "N"],
    [74.995, "N"],
    [74.994, "D"],
  ])("when input is in between the ranges (%f), then it should be rounded and output should be (%s)",
    (grade, expected)=>{
      //Arrange
      //Act
      const actual = gradeClassifier(grade)
      //Assert
      expect(actual).toBe(expected)
    }
  )


});
