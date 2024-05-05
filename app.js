let secs = 0;
let mins = 0
let hours =  0;


let displaySeconds = 0;
let displayMinutes = 0
let displayhours = 0;

let Status = "stopped"
let interval= "" ;

function startwatch(){
    secs++

    if(secs/60 === 1){
        secs = 0;
        mins++
        

        if(mins/60 ===1){
        mins = 0
       hours++

    }
    }
    if(secs < 10){
     displaySeconds = 0 + secs.toString();

    }else{
        displaySeconds =secs
    }

    if(mins < 10){
        displayMinutes = 0 + mins.toString();
   
       }else{
           displayMinutes =mins
       }

       if(hours < 10){
        displayhours = 0 + hours.toString();
   
       }else{
           displayhours =hours
       }

    let display = document.getElementById('display')

    display.innerHTML =  `<h1>${displayhours} h : ${displayMinutes} m : ${displaySeconds} s</h1>`
}
function startStop(){
    if(Status == "stopped"){
     interval =   window.setInterval(startwatch , 1000)
      document.getElementById("handler").innerHTML = 'STOP';
      Status = "started"

    }else if(Status == "started"){
        window.clearInterval(interval)
        document.getElementById("handler").innerHTML = "START";
        Status = "stopped"
    }
}

function reset(){
    secs = 0;
    mins = 0;
    hours = 0;
    window.clearInterval(interval);
    let display = document.getElementById('display')

    display.innerHTML =  `<h1>00 h : 00 m : 00 s</h1>`
    document.getElementById("handler").innerHTML = "START";
    Status = "stopped"


}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}


function fullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
let hour = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let timer = document.querySelector('#timer')
let btn = document.querySelector('#start_btn')
let timerstart =  document.getElementById('timerStart')
let timerInterval;
btn.addEventListener('click' , ()=>{
    var calculateseconds = Number(hour.value) * 3600 + Number(minutes.value) * 60 + Number(seconds.value);
      timerInterval =   setInterval(() => {
        var hr = Math.floor(calculateseconds / 3600 ) 
        var min = Math.floor((calculateseconds % 3600) / 60);
        var sec = Math.floor(calculateseconds % 60);
            timer.innerHTML  = `${hr}:${min}:${sec}`
            calculateseconds--

            if(calculateseconds > 0) {
                calculateseconds--
            } else {
                clearInterval(timerInterval)
            }
        }, 1000);
     


})


    function timerReset() {
        clearInterval(timerInterval);
        document.querySelector('.hours').value = '0';
        document.querySelector('.minutes').value = '0';
        document.querySelector('.seconds').value = '0';
        document.getElementById('timer').innerHTML = '00:00:00';
    }



