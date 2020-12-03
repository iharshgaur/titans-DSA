function runProgram(input) {
  input = input.split(" ").map(Number);
  if (input[0] < input[1]) {
    console.log("Broken");
  } else if (input[0] > input[1]) {
    console.log("Not Yet");
  } else {
    console.log("Wao");
  }
}

runProgram(`264 200`);
