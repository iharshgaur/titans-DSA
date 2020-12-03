function runProgram(input) {
  var vowels = "aeiou";
  var count = 0;
  input.split("").forEach(function (element) {
    count += !vowels.includes(element);
  });
  console.log(count);
}

runProgram(`masaischool`);
