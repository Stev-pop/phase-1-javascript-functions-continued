// code your solution here

function saturdayFun(activity ='roller-skate' ){
    return `This Saturday, I want to ${activity}!`;
    }
    saturdayFun("bathe my dog");
    
function mondayWork(action = 'go to the office'){
    return `This Monday, I will ${action}.`;
    }
    mondayWork("work from home");

function wrapAdjective(visualFlair) {
        return function(adjective) {
          return `You are ${visualFlair}${adjective}${visualFlair}!`;
        };
      }
      wrapAdjective("%")("a dedicated programmer");

