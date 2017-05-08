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

    return matrix;
    // for (var i = 0; i < matrix.length; i++) {
    //   console.log(JSON.stringify(matrix[i]));
    // }
  },

  RotateMatrix: function() {
    var originalMatrix = RotateMatrix.CreateMatrix();
    for (var i = 0, j=originalMatrix.length - 1; i < originalMatrix.length; i++, j--) {
      Things[i]
    }
  }
};
