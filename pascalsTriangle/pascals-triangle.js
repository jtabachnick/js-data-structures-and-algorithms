/**
 * Given an index k, return the kth row of the Pascal's triangle.
 For example, given k = 3,
 Return [1,3,3,1].
 Note:
 Could you optimize your algorithm to use only O(k) extra space?
 */


var Pascals = {

  DisplayNthRow: function() {
    var index = $('#index').val();
    $('#result').html(JSON.stringify(Pascals.GetNthRow(index)));
  },

  GetNthRow: function(index) {
    if (index == 0) {
      return [1];
    }else if (index == 1) {
      return [1, 1];
    }else if (index == 2) {
      return [1, 2, 1];
    }else {
      var counter = index - 2;
      var previousRow = [1, 2, 1];
      var currentRow = [];

      while (counter > 0) {
        currentRow = [];
        for (var i = 1; i < previousRow.length; i++) {
          currentRow.push(previousRow[i] + previousRow[i - 1]);
        }

        currentRow.unshift(1);
        currentRow.push(1);

        previousRow = currentRow;

        counter--;
      }
    }

    return currentRow;
  }
};

$(document).ready(function() {
  $('#submit').on('click', function() {Pascals.DisplayNthRow()});
});
