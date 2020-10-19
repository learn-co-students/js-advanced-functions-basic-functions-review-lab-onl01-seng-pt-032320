function saturdayFun(activity="roller-skate"){
    return( `This Saturday, I want to ${activity}!`);
    }
   saturdayFun(); 

function mondayWork(activity='go to the office') {
    return(`This Monday, I will ${activity}.`);
    }
    mondayWork("work from home");      

function wrapAdjective(style="*") {
    return function(say="special"){
        return(`You are ${style}${say}${style}!`)
    }

}

const Calculator = {
	add: function(a, b) {
      return a + b
     },
     subtract: function(a, b) {
         return a - b
     },
     multiply: function(a, b) {
         return a * b
     },
     divide: function(a,b){
         return a / b
     }
  
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }