function runProgram(input) {
  input = input.split('\n').map(function (element) {
    return element.split(' ')
  })
  var xScore = 0, oScore = 0;

  function checkMajorDiagonal() {
    var x = 0, o = 0;
    input.forEach(function (element) {
      if (element == 'x') {
        x += 1
      } else {
        o += 1
      }
    })

    if (x == 3) {
      return 'x'
    } else if (o == 3) {
      return 'o'
    }
  }

  console.log(checkMajorDiagonal())

}

runProgram(`o o x
o x x
x o o`)