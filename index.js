let totalSeconds = 40 * 60;
let countdown = null;

const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const musicBtn = document.getElementById("musicBtn");
const alarmBtn = document.getElementById("alarmBtn");

const cyberMusic = document.getElementById("cyberMusic");
const alarmSound = document.getElementById("alarmSound");

let musicPlaying = false;

/* TIMER */

function updateDisplay(){

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  timer.textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  if(totalSeconds <= 300){

    timer.classList.add("warning");

  } else {

    timer.classList.remove("warning");
  }
}

function startTimer(){

  if(countdown !== null){
    return;
  }

  countdown = setInterval(() => {

    if(totalSeconds > 0){

      totalSeconds--;

      updateDisplay();

    } else {

      clearInterval(countdown);

      countdown = null;
    }

  }, 1000);
}

function pauseTimer(){

  clearInterval(countdown);

  countdown = null;
}

function resetTimer(){

  clearInterval(countdown);

  countdown = null;

  totalSeconds = 40 * 60;

  updateDisplay();
}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

/* MÚSICA */

musicBtn.addEventListener("click", async () => {

  try{

    if(!musicPlaying){

      cyberMusic.volume = 0.5;

      await cyberMusic.play();

      musicPlaying = true;

      musicBtn.style.boxShadow =
        "0 0 25px #00ff99, 0 0 50px #00ff99";

    } else {

      cyberMusic.pause();

      musicPlaying = false;

      musicBtn.style.boxShadow =
        "0 0 15px #00ffff";
    }

  } catch(error){

    console.log(error);

    alert("Erro ao tocar música.");
  }

});

/* ALARME */

alarmBtn.addEventListener("click", async () => {

  try{

    alarmSound.pause();

    alarmSound.currentTime = 0;

    alarmSound.volume = 1;

    await alarmSound.play();

    alarmBtn.style.boxShadow =
      "0 0 25px red, 0 0 50px red";

    setTimeout(() => {

      alarmSound.pause();

      alarmSound.currentTime = 0;

      alarmBtn.style.boxShadow =
        "0 0 15px #00ffff";

    }, 5000);

  } catch(error){

    console.log(error);

    alert("Erro ao tocar alarme.");
  }

});

updateDisplay();