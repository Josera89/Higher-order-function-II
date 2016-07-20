var multiply = function (number) {
  return function(content) {
    return content * number;
  }
}

var result = multiply(4)(6);
console.log(result);
