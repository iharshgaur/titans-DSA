function runProgram(input) {
  input = input.split("\n")[1].split(" ").map(Number);
  var index = input.indexOf(2);

  if (index == -1 || index == input.length - 1 || input.length == 1) {
    console.log(-1);
  } else {
    console.log(input[index + 1]);
  }
}

runProgram(`5
3 4 2 0 1`);
