function runProgram(input) {
  input = input.split("\n")[1].split(" ").map(Number);
  var oddSum = 0,
    evenSum = 0;
  input.forEach(function (element) {
    if (element % 2 == 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  });

  if (oddSum > evenSum) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

runProgram(`4
1 2 3 4`);
