function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; },
  multiply: function(a, b) {return a * b; },
  divide: function(a, b) { return a / b; }
}

function actionApplyer(int, arr){
  if (arr.length === 0) return int;
  let result = int;
  for (const action of arr) {
    result = action(result);
  }
  return result;
}

 