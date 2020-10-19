// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper="*") {
    let innerFunction = function(adjective="special") {
        return `You are ${wrapper}${adjective}${wrapper}!`
    }

    return innerFunction
}

let Calculator = {
    add: function(num1, num2) {
        return (num1 + num2)
    },
    subtract: function(num1, num2) {
        return (num1 - num2)
    },
    multiply: function(num1, num2) {
        return (num1 * num2)
    },
    divide: function(num1, num2) {
        return (num1 / num2)
    }
}

function actionApplyer(num, functions) {
    functions.forEach(fun => { num = fun(num) })
    return num
}