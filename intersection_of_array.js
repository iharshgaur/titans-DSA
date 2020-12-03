function runProgram(input) {
  input = input.split("\n");
  var arr1 = input[1].split(" ").map(Number);
  var arr2 = input[2].split(" ").map(Number);

  arr1.some(function (x) {
    return arr2.some(function (y) {
      if (x == y) {
        console.log(x);
        return true;
      }
    });
  });
}

runProgram(`3
4 5 7
9 2 5`);
