/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function Sum(n){
    var total =0;
    for (var i=1;i<=n;i++){
        total +=i;
    }
    return total;
}

function calculateTime(n) {
    starttime = new Date();
    console.log(starttime);
    Sum(n);
    endtime = new Date();
    //console.log(total);
    console.log(endtime)
    return (endtime-starttime);
}

console.log(calculateTime(1000000000)/1000 + "  Seconds");