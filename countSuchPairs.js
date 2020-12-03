function runProgram(input) {
  input = input.split("\n");

  var target = Number(input[0].split(" ")[1]);
  var arr = input[1].split(" ").map(Number);

  var count = 0;

  arr.forEach(function (x, i) {
    arr
      .filter(function (y, j) {
        return j > i;
      })
      .forEach(function (z) {
        if (x + z == target) {
          count++;
        }
      });
  });

  console.log(count);
}

console.log(
  runProgram(`5 9
3 0 6 2 7`)
);
