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

  const Calculator = function(){

}