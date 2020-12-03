function runProgram(input) {
  input = input.split("\n");
  var t = Number(input[0]);
  input = input.slice(1);
  while (t--) {
    var rupees = Number(input[0].split(" ")[1]);
    var buildingHeights = input[1].split(" ").map(Number);

    let min = 0,
      earnings = rupees;
    buildingHeights.forEach(function (element, i) {
      if (buildingHeights[min] < element) {
        earnings += rupees;
        min = i;
      }
    });
    console.log(earnings);

    input = input.slice(2);
  }
}

runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);
