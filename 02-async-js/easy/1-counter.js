// ## Create a counter in JavaScript
// <!-- 
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->
var timer =0;
function updateTimer(){
    console.clear();
    console.log(timer+=1);
}

setInterval(updateTimer,1000)