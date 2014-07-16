function DoRecursion (times) {
  this.times = times;
}

function outputManyTimesGen (tokens) {
  function outputManyTimes (tokens) {
    for (var i in tokens) {
      var token = tokens[i];
      if (token instanceof DoRecursion) {
        if (token.times == 0)
          return;
        token.times --;
        outputManyTimes(tokens);
        token.times ++;
      } else {
        console.log(token);
      }
    }
  };
  return function () {
    outputManyTimes(tokens);
  };
}

var arr = [1, 2, 3, new DoRecursion(2), 4, 5];

var f = outputManyTimesGen();
f();

console.log(JSON.stringify(arr));