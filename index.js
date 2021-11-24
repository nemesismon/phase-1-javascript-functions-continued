//Type your code here

function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(sym='*') {
  return function (adj='special') {
    return `You are ${sym}${adj}${sym}!`;
  }
}