// Your code here
const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = (activity = "go to the office") => {
    let string = `This Monday, I will ${activity}.`
    return string
}


const wrapAdjective = (top = "*") =>{
    return function(string = "special"){
        return `You are ${top}${string}${top}!`
    }
    
}


const Calculator = {
    add: (a,b) => {
        return a + b
    },

    subtract: (a,b) => {
        return a - b
    },

    multiply: (a,b) => {
        return a*b
    },

    divide: (a,b) => {
        return a/b
    }
}

const actionApplyer = (start, array) => {
    let a = start

    for(let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a
}