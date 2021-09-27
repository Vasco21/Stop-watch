let [milliseconds,seconds,munites,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');

let int;

document.getElementById('startTimer').addEventListener('click', () =>{
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click' ,() =>{
    clearInterval(int)
});

document.getElementById('resetTimer').addEventListener('click', () =>{
    clearInterval(int);
    [milliseconds,seconds,munites,hours] = [0,0,0,0];
    timerRef.innerHTML = "00 : 00 : 00 : 00";
});

var displayTimer = function(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++
        if(seconds == 60){
            seconds = 0;
            munites++;
            if(munites == 60){
                munites = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = munites < 10 ? "0" + munites : munites;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    
    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}