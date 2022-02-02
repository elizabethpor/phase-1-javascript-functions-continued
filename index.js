function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (workActivity = "go to the office") {
    return `This Monday, I will ${workActivity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function innerFunction(parameter = "special") {
        return `You are ${flair}${parameter}${flair}!`;
    }
}
wrapAdjective()("a hard worker");