function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(spChar = "*") {
    return function(encouragement = "special") {
        return `You are ${spChar}${encouragement}${spChar}!`
    }
};

 let Calculator = {
     add: function add(num1, num2) {return num1 + num2},
     subtract: function sub(num1, num2) {return num1 - num2},
     multiply: function times(num1, num2) {return num1 * num2},
     divide: function div(num1, num2) {return num1 / num2}
 };

 function actionApplyer(integer = 0, array) {
      if (array.length === 0) {
          return integer
      } else {
          for (let i = 0; i < array.length; i++) {
              integer = array[i](integer)
          }
          return integer
      }
 };
