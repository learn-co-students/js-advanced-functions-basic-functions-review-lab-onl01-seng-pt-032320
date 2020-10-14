// Your code here
// 1
function saturdayFun(activity="roller-skate") { return `This Saturday, I want to ${activity}!` }

// 2
let mondayWork = function(doThing="go to the office") {return `This Monday, I will ${doThing}.`};

// 3
function wrapAdjective(theString="*") {
    return function(pants="special") {return `You are ${theString}${pants}${theString}!`}
}

// 4
let Calculator = { 
    add: function (a, b) { return a + b },
    subtract: function (a, b) { return a - b },
    multiply: function (a, b) { return a * b },
    divide: function (a, b) { return a / b }
}

// 5
function actionApplyer(init, arr) {
    if (arr.length===0) {return init;} else
    {
        let one = arr[0](init);
        let two = arr[1](one);
        return arr[2](two);
    }
}