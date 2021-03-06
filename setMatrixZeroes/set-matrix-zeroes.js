/**
 * Given a m x n matrix, if an element is 0,
  set its entire row and column to 0. Do it in place.

 Follow up:
 Did you use extra space?
 A straight forward solution using O(mn) space is probably a bad idea.
 A simple improvement uses O(m + n) space, but still not the best solution.
 Could you devise a constant space solution?
 */

var SetZeroes = {
    CreateMatrix: function() {
      var matrixWidth = Math.floor(Math.random() * 10);
      var matrixHeight = Math.floor(Math.random() * 10);

      if (matrixWidth < 2) {
        matrixWidth = 2;
      }

      if (matrixHeight < 2) {
        matrixHeight = 2;
      }


      var matrix = [];
      for (var i = 0; i < matrixHeight; i++) {
        var array = [];
        for (var j = 0; j < matrixWidth; j++) {
          array.push(Math.floor(Math.random() * 10));
        }
        matrix.push(array);
      }

      
      for (var i = 0; i < matrix.length; i++) {
        $('#result').append(JSON.stringify(matrix[i]) + '<br>');
      }

      return matrix;

  },

  ZeroOut: function() {
    var matrix = SetZeroes.CreateMatrix();

    //posible m*n space, could be reduced to m+n with hash sets
    var rowsToZero = [];
    var columnsToZero = [];

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          rowsToZero.push(i);
          columnsToZero.push(j);
        }
      }
    }

    for (var k = 0; k < rowsToZero.length; k++) {
      var rowToZero = rowsToZero[k];
      for (var l = 0; l < matrix[rowToZero].length; l++) {
        matrix[rowToZero][l] = 0;
      }
    }

    for (var m = 0; m < columnsToZero.length; m++) {
      var columnToZero = columnsToZero[m];
      for (var n = 0; n < matrix.length; n++) {
        matrix[n][columnToZero] = 0;
      }
    }

    $('#result').append('Zeroed Matrix: <br>');
      for (var p = 0; p < matrix.length; p++) {
        $('#result').append(JSON.stringify(matrix[p]) + '<br>');
      }
  },


  ZeroOutImproved: function() {
    //should be constant space
    var matrix = SetZeroes.CreateMatrix();
    var columnZeroContainsZero = false;
    var rowZeroContainsZero = false;
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = matrix[i][0] = 0;

          if (i === 0) {
            rowZeroContainsZero = true;
          }

          if (j == 0) {
            columnZeroContainsZero = true;
          }
        }
      }
    }

    for (var i = matrix.length - 1; i >= 1; i--) {
      for (var j = matrix[i].length - 1; j >= 1; j--) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0;
        }
      }
    }

    if (rowZeroContainsZero) {
      for (var i = 0; i < matrix[0].length; i++) {
        matrix[0][i] = 0;
      }
    }

    if (columnZeroContainsZero) {
      for (var i = 0; i < matrix.length; i++) {
        matrix[i][0] = 0;
      }
    }


    $('#result').append('Improved Zeroed Matrix: <br>');
      for (var p = 0; p < matrix.length; p++) {
        $('#result').append(JSON.stringify(matrix[p]) + '<br>');
      }
  }



};


$(document).ready(function() {
  $('#generate').on('click', function() {
    $('#result').html('Original Matrix: <br>');
    SetZeroes.ZeroOut();
    $('#result').append('Original Matrix: <br>');
    SetZeroes.ZeroOutImproved();
  });
});
