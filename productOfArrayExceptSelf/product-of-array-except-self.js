/*
  Given an array of n integers where n > 1, nums, return an array output such
  that output[i] is equal to the product of all the elements of nums except
  nums[i].

  Solve it without division and in O(n).
  For example, given [1,2,3,4], return [24,12,8,6].

  Follow up:
  Could you solve it with constant space complexity?
  (Note: The output array does not count as extra space for the purpose of
  space complexity analysis.)
*/

var Product = {
  
  Validate: function() {
    var input = $('#input').val();
    return input.match(/^[0-9]+(,[0-9]+)*$/);
  },

  ReadInput: function() {
    if (Product.Validate() != null) {
      var input = $('#input').val().split(',');
      return input.map(Number);
    }
    $('#result').html('Please enter only integers and commas');
    throw exception;
  },

  GetProductArray: function() {
    var input = Product.ReadInput();
    var result = [];
    var temp = 1;
    for (var i = 0; i < input.length; i++) {
      result.push(temp);
      temp *= input[i];
    }

    temp = 1;
    for (var i = input.length - 1; i >= 0; i--) {
      result[i] *= temp;
      temp *= input[i];
    }

    return result;
  },

  PrintResult: function() {
    $('#result').html(JSON.stringify(Product.GetProductArray()));
  }

};

$(document).ready(function() {
  $('#submit').on('click', function() {
    Product.PrintResult();
  });
});

