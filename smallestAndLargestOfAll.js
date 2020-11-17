function runProgram(input) {
	input = input.split('\n');
	// console.log(input)
	var n = Number(input[0]);
	var arr = input[1].split(' ').map(function(x) {
		return Number(x);
	});
	// console.log(n, arr)

	var min = Infinity;

	arr.forEach(function(x) {
		min = min < x ? min : x;
	});
	console.log(min);

	var max = -Infinity;

	arr.forEach(function(x) {
		max = max > x ? max : x;
	});
	console.log(max);
}

runProgram(`4
-2 0 8 4`);
