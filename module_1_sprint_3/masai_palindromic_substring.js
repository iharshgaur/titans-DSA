function runProgram(input) {
  
	function isPalindrome(str) {
		for (var i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
			if (str[i] != str[j]) {
				return false;
			}
		}
		return true;
	}

  var inputArr = input.split('')
  var maxLen = 1;

  for (var i = 0; i < inputArr.length; i++) {
    var str = ''
    for (var j = i; j < inputArr.length; j++) {
      str += inputArr[j]
      if (isPalindrome(str)) {
        maxLen = Math.max(maxLen, str.length)
      }
    }
  }

  console.log(maxLen)
}

runProgram(`thisracecarisgood`);
