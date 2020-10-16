// Your code here
function saturdayFun(day = "roller-skate"){
 return `This Saturday, I want to ${day}!`
}

function mondayWork(day ="go to the office"){
    return `This Monday, I will ${day}.`
}

function wrapAdjective(value = "*"){
    return function(mood="special"){
        return `You are ${value}${mood}${value}!`
    }
}

let encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer")



const Calculator = {
    add: function(value1, value2) { return value1 + value2},
    subtract: function(value1, value2) { return value1 - value2},
    multiply: function(value1, value2) { return value1 * value2},
    divide: function(value1, value2) { return value1 / value2}
}

function actionApplyer(start, arr){
    if (arr.length === 0){
        return start
    }
    else {

    }
}
