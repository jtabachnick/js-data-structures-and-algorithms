/*
 * You are given an n x n 2D matrix representing an image.
 Rotate the image by 90 degrees (clockwise).
 Follow up:
 Could you do this in-place?
 */


var RotateMatrix = {
  CreateMatrix: function() {
    var matrixSize = Math.floor(Math.random() * 10);

    if (matrixSize < 2) { matrixSize = 2}

    var matrix = [];
    for (var i = 0; i < matrixSize; i++) {
      var array = [];
      for (var j = 0; j < matrixSize; j++) {
        array.push(Math.floor(Math.random() * 10));
      }
      matrix.push(array);
    }

    $('#result').html('Original Matrix: <br>');
    for (var i = 0; i < matrix.length; i++) {
      $('#result').append(JSON.stringify(matrix[i]) + '<br>');
    }

    return matrix;

  },

  RotateMatrix: function() {
    var matrix = RotateMatrix.CreateMatrix();
    var topRow = 0;
    var bottomRow = matrix.length - 1;
    var leftColumn = 0;
    var rightColumn = matrix.length - 1;

    $('#result').append('Rotating...<br>');

    while (topRow < bottomRow) {
      for (var i = topRow, j = leftColumn, k = bottomRow, l = rightColumn;
            i < bottomRow && j < rightColumn && k > topRow && l > leftColumn;
            i++, j++, k--, l--) {
        var temp1 = matrix[i][rightColumn];
        matrix[i][rightColumn] = matrix[topRow][j];
        var temp2 = matrix[bottomRow][l];
        matrix[bottomRow][l] = temp1;
        temp1 = matrix[k][leftColumn];
        matrix[k][leftColumn] = temp2;
        matrix[topRow][j] = temp1;
      }
      topRow++;
      leftColumn++;
      rightColumn--;
      bottomRow--;
    }

    for (var i = 0; i < matrix.length; i++) {
      $('#result').append(JSON.stringify(matrix[i]) + '<br>');
    }
  }
};

$(document).ready(function() {
    $('#generate').on('click', function() {RotateMatrix.RotateMatrix()});
});
