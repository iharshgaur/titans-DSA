function generateMatrix (n, m) {
  var matrix = []
  for (var i = 0; i < n; i++) {
    var row = []
    for (var j = 0; j < m; j++) {
      var temp = `(${i},${j})`
      row.push(temp)
    }
    matrix.push(row)
  }

  return matrix
}
var count = 0
for (var i = 0; i < n; i++) {
  for (var j = 0; j < m - 2; j++) {
    // check rows
    if ()
  }
}

var n = 5, m = 6;
console.log(generateMatrix(5, 6))
