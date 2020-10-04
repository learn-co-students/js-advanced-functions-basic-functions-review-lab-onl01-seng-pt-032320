// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(beyond = '*') {
    return function(result = 'special') {
        return `You are ${beyond}${result}${beyond}!`
    }
}

const Calculator = {
    add: function(b,j) {
        return b + j;
    },

    subtract: function(b,j) {
        return b - j;
    },

    multiply: function(b,j) {
        return b * j;
    },

    divide: function(b,j) {
        return b / j;
    }
}

let actionApplyer = function (start, a) {
    let first = start
    for (let n = 0; n < a.length; n++) {
        first = a[n](first)
    }
    return first
}
