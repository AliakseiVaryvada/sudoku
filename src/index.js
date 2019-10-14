function saveEmptyPositions(matrix) {
    var emptyPosition = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix(i).length; i++) {
            if (matrix[i][j] === 0) {
                emptyPosition.push([i, j]);
            }
        }
    }
}

module.exports = function solveSudoku(matrix) {
    // your solution
};