function runProgram(input) {
  input = input.split("\n")[1].split("");
  var count = {};
  input.forEach(function (element, index) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });

  var lexOrder = "abcdefghijklmnopqrstuvwxyz".split("");
  lexOrder.forEach(function (element) {
    if (count[element]) {
      console.log(element + " " + count[element]);
    }
  });
}

runProgram(`4
masaischool`);
