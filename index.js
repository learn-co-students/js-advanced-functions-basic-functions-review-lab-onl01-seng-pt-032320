function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function(message="special") {
        return `You are ${flair}${message}${flair}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b 
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(value, array) {
    for (let i = 0; i < array.length; i++) {
        value = array[i](value)
    }
    return value

}