// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string='go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string="*"){
    return function(adjective="special"){
        return `You are ${string}${adjective}${string}!`


    }
}

let Calculator = {
   add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b){
       return  a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }

}

function actionApplyer(int, array){

    let newInt = int

    for (let i = 0; i < array.length; i++ ) {
        newInt = array[i](newInt)
    
    }
    return newInt

}