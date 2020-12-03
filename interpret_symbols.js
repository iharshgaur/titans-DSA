function runProgram(input) {
  input = input.split("\n");
  var n = Number(input[0]);
  var symbols = input[1].split("");

  symbols.forEach(function (element) {
    switch (element) {
      case "@":
        n *= 10;
        break;
      case "!":
        n += 2;
        break;
      case "%":
        n -= 5;
        break;
      case "^":
        n **= 2;
        break;
      case "$":
        n += 37;
        break;
    }
  });

  console.log(n);
}

runProgram(`2
^@!@`);
