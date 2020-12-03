function runProgram(input) {
	input = input.split('\n').map(function(element) {
		return element.split(' ').map(Number);
	});

	var n = input[0][0];
	var m = input[0][1];
	var target = input[0][2];
	var mat = input.slice(1);

	var count = 0
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m - 2; j++) {
			// check rows
			if (mat[i][j] * mat[i][j + 1] * mat[i][j + 2] == target) {
				count++
			}
			// check major diag
			if (i < n - 2) {
				if (mat[i][j] * mat[i + 1][j + 1] * mat[i + 2][j + 2] == target) count++
			}
			// check minor diag
			if (i >= 2) {
				if (mat[i][j] * mat[i - 1][j + 1] * mat[i - 2][j + 2] == target) count++
			}
		}
	}

	// check column
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n - 2; j++) {
			if (mat[j][i] * mat[j + 1][i] * mat[j + 2][i] == target) count++
		}
	}

	console.log(count)
}


runProgram(`3 3 6
3 2 1
2 2 2
1 5 1`);
