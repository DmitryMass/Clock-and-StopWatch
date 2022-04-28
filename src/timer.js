document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.clock__start');
  const stopBtn = document.querySelector('.clock__end');
  const resetBtn = document.querySelector('.clock__reset');
  const hoursElement = document.querySelector('.clock__hours');
  const minutesElement = document.querySelector('.clock__minutes');
  const secondElement = document.querySelector('.clock__seconds');
  const milisecondElement = document.querySelector('.clock__miliseconds');

  let timeHours = 00;
  let timeMinutes = 00;
  let timeSeconds = 00;
  let timeMiliseconds = 00;
  let interval;

  function startTimer() {
    // Miliseconds // Second

    timeMiliseconds++;
    milisecondElement.innerText = plusZero(timeMiliseconds);

    if (timeMiliseconds > 99) {
      timeSeconds++;
      secondElement.innerText = plusZero(timeSeconds);
      timeMiliseconds = 0;
      milisecondElement.innerText = plusZero(timeMiliseconds);
    }
    // Second/ Minutes
    if (timeSeconds >= 60) {
      timeMinutes++;
      minutesElement.innerText = plusZero(timeMinutes);
      timeSeconds = 0;
      secondElement.innerText = plusZero(timeSeconds);
    }
    // Minutes Hours
    if (timeMinutes >= 60) {
      timeHours++;
      hoursElement.innerText = plusZero(timeHours);
      timeMinutes = 0;
      minutesElement.innerText = plusZero(timeMinutes);
    }
  }

  startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(interval);
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
  });

  function plusZero(item) {
    if (item < 10) {
      return `${`0${item}`}`;
    }
    return item;
  }
  function resetTimer() {
    timeHours = 00;
    timeMinutes = 00;
    timeSeconds = 00;
    timeMiliseconds = 00;
    milisecondElement.innerText = '00';
    secondElement.innerText = '00';
    minutesElement.innerText = '00';
    hoursElementElement.innerText = '00';
  }
});
