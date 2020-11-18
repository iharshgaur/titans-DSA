function runProgram(input) {
  var arr = input.split("\n")[1].split(" ").map(Number);

  function isPrime(n) {
    if (n == 1) return false;
    var i = 2;
    while (i <= Math.sqrt(n)) {
      if (n % i == 0) return false;
      i++;
    }
    return true;
  }

  var sum = 0;
  arr.forEach(function (x, i) {
    arr.forEach(function (y, j) {
      if (i < j && isPrime(j - i)) {
        sum += Math.abs(arr[i] - arr[j]);
      }
    });
  });

  console.log(sum);
}

runProgram(`6
1 2 3 5 7 12`);
