function runProgram(input) {
	input = input.split('\n');
	var nm = input[0].split(' ').map(Number);
	var matrix = input.slice(1).map(function(element) {
		return element.split(' ');
	});

	var matTranspose = [];
	for (var i = 0; i < nm[1]; i++) {
		var newRow = [];
		for (var j = 0; j < nm[0]; j++) {
			newRow.push(matrix[j][i]);
		}
		matTranspose.push(newRow);
	}

	console.log(
		matTranspose
			.map(function(element) {
				return element.join(' ');
			})
			.join('\n')
	);
}

runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
