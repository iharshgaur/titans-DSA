function runProgram(input) {
  input = input.split('\n')[1].split(' ').map(Number)

  var total = input.reduce(function (acc, curr) {
    return acc + curr
  }, 0)

  var min = Infinity;
  input.forEach(function (element) {
    if ((total - element) % 7 == 0) {
      min = min < element ? min : element;
    }
  })

  console.log(input.indexOf(min))
}

runProgram(`5
14 7 8 2 4`)