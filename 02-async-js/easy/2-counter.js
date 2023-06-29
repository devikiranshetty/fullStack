var timer=0;
function logtimer(){
    timer+=1;
    console.clear();
    console.log(timer);
    setTimeout(logtimer,1000)
}

setTimeout(logtimer,1000)
   