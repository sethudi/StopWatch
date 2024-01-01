// Write your code here.
const start = document.getElementById('start-button');
const timer = document.getElementById('timer');
const stop = document.getElementById('stop-button');
const reset = document.getElementById('reset-button');

start.addEventListener('click',handleStart);
stop.addEventListener('click',handleStop);
reset.addEventListener('click',handleReset);

let timeID;
let millisBeforeLastStart =0;
let assientTime

function handleStart(){
  start.disabled =true;
  stop.disabled =false;
  reset.disabled =true;
  assientTime = Date.now() ;
  
  timeID =setInterval(() => {
    millisElapsed = Date.now()- assientTime + millisBeforeLastStart;
    secondsElapsed = millisElapsed / 1000;
    minutesElapsed = secondsElapsed / 60;

    textMillis = formatNumber(millisElapsed % 1000,3);
    textSeconds = formatNumber(Math.floor(secondsElapsed) % 60,2);
    textMinutes = formatNumber(Math.floor(minutesElapsed),2); 
    
    timer.textContent = `${textMinutes}:${textSeconds}:${textMillis}`;
  },1);
}
function formatNumber(number,desired){
  const stringNumber = String(number);
  return stringNumber.padStart(desired,'0');
}

function handleStop(){
  start.disabled =false;
  stop.disabled =true;
  reset.disabled =false;
  
  clearInterval(timeID);
  millisBeforeLastStart += Date.now() - assientTime; 
}

function handleReset(){
  reset.disabled =true;
  timer.textContent = "00:00:000";
  
  millisBeforeLastStart =0;
}




