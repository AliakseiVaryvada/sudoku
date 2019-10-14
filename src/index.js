var emptyPosition = [];

function saveEmptyPositions(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                emptyPosition.push([i, j]);
                console.log(emptyPosition);
            }
        }
    }
    return emptyPosition;
}

function checkRow(matrix, row, value) {
    for (var i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] === value) {
            return false;
        }
    }
    return true;
}

function checkColum(matrix, colum, value) {
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i][colum] === value) {
            return false;
        }
    }
    return true;
}

function check3x3(matrix, colum, row, value) {
    var columCorner = 0;
    var rowCorner = 0;
    var squareSize = 3;

    while (colum >= columCorner + squareSize) {
        columCorner += squareSize; // находим границу столбцов
    }
    while (row >= rowCorner + squareSize) {
        rowCorner += squareSize; //находим границу строк
    }
    for (var i = columCorner; i < columCorner + squareSize; i++) {
        //перебор столбцов 3*3
        for (var j = rowCorner; j < rowCorner + squareSize; j++) {
            //перебор строк 3*3
            if (matrix[i][j] === value) {
                return false;
            }
        }
    }
    return true;
}

function checkValue(matrix, row, colum, value) {
    if (
        check3x3(matrix, row, colum, value) &&
        checkColum(matrix, colum, value) &&
        checkRow(matrix, row, value)
    ) {
        return true;
    } else {
        return false;
    }
}

module.exports = function solveSudoku(matrix) {
    saveEmptyPositions(matrix);
    console.log(emptyPosition);
    var limit = 9;
    var i, row, colum, value, found;
    for (i = 0; i < emptyPosition.length;) {
        row = emptyPosition[i][0];
        colum = emptyPosition[i][1];
        value = matrix[row][colum] + 1;
        found = false;
        while (!found && value <= limit) {
            if (checkValue(matrix, row, colum, value)) {
                found = true;
                matrix[row][colum] = value;
                i++;
            } else {
                value++;
            }
        }
        if (!found) {
            matrix[row][colum] = 0;
            i--;
        }
    }
    return matrix;
};
console.log(
    solveSudoku([
        [5, 3, 4, 6, 7, 8, 9, 0, 0],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ])
);