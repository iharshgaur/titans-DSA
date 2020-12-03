function runProgram(input) {
  input = input.trim().split('\n').map(Number)
  var t = input[0]
  input.slice(1).forEach(function (element) {
    var num = element;
    var sum = 0;
    while (num > 9) {
      console.log(Math.floor(num / 10))
      sum += Math.floor(num / 10)
      num = Math.floor(num / 10) + (num % 10)
    }
    console.log(element + sum)
  })
}

runProgram(`1
9876`)