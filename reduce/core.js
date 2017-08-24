'use strict';
var input = [ 10, 15, 20, 25, 30, 35 ];
// var expected = 135
function sum (array) {
  // your code here
 return array.reduce(function (prev, curr) {
    return prev + curr;
  });
}

function productAll (array) {
  // your code here
  return array.reduce(function (product, row) {
    product *= row.reduce(function (prev, curr) {
      return prev * curr;
    });

    return product;
  }, 1);
}

function objectify (array) {
  return array.reduce(function (cartoons, row) {
      cartoons[row[0]] = row[1];
      return cartoons;
    }, {});
  }

function luckyNumbers (array) {
  // your code here
  return array.reduce(function (fortune, num, index, nums) {
     if ( index === (nums.length - 1)) {
       return fortune += ( 'and ' + num );
     } else {
       return fortune += ( num + ', ');
     }
   }, 'Your lucky numbers are: ');
 }

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
