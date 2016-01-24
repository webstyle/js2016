// var simple = function(a, b) {
//   return a + b;
// };
//
// console.log(simple(23,23));

var myObject = {
  summa: function (a, b) {
   console.log(this);
   return a + b;
  }
};

// console.log(myObject.summa(23,34));

var myObj = (function() {

  function privateMethod() {
    console.log(this);
    return "Private Method";
  }
  return {
    summa: function(a, b) {
      var that = this;
      function helper(a, b) {
        console.log(that);
        that.multiply = a * b;
      }

      helper(a,b);

      return a +b;
    },
    publicMethod: privateMethod
  };

})();

// console.log(myObj.summa(23,23));
// console.log(myObj.publicMethod());
// console.log(myObj.multiply);
var arr = [23,23];
var summa = function(a, b) {
  console.log(this.summa(a,b));
  console.log(this.multiply);
  return a + b;
};

var add = summa.apply(myObj, arr);
console.log(add);
