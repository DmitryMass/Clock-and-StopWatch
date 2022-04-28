document.addEventListener('DOMContentLoaded', () => {
  const clock = document.querySelector('.clock');

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${plusZero(hours)}:${plusZero(minutes)}:${plusZero(seconds)}`;
    clock.innerText = time;
  });

  function plusZero(item) {
    if (item < 10) {
      return `${`0${item}`}`;
    }
    return item;
  }
});
