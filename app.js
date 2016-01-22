var app = (function() {
  var privateFunc = function () {
    return 'This is private function';
  };
  return {
    func: function(a, b) {
      var that = this;
      var helperFunc = function(a, b) {
        that.mul = a * b;
      };
      helperFunc(a, b);
      return a + b;
    },
    publicFunc: privateFunc
  };
})();

// console.log(app.func(12,23));
// console.log(app.mul);

var arr = [2,3];
var add = function(a, b) {
  console.log(this);
  return a + b;
};

var summa = add.apply(app, arr);

console.log(summa);
