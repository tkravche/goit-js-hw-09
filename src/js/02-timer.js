import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (this.selectedDates[0].getTime() - new Date().getTime() <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    const startButton = document.querySelector('[data-start]');
    startButton.toggleAttribute('disabled');
    let timerId = null;
    startButton.addEventListener('click', selectedDates => {
      const finalTime = this.selectedDates[0].getTime();
      timerId = setInterval(() => {
        const delta = new Date(finalTime) - new Date();
        const calculatedTime = convertMs(delta);
        if (delta <= 0) {
          clearInterval(timerId);
          return;
        }
        console.log(calculatedTime);
        addLeadingZero(calculatedTime);
      }, 1000);
    });
  },
};
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const UISeconds =
    `${value.seconds}`.length === 2
      ? value.seconds
      : `${value.seconds}`.padStart(2, '0');
  const UIMinutes =
    `${value.minutes}`.length === 2
      ? value.minutes
      : `${value.minutes}`.padStart(2, '0');
  const UIHours =
    `${value.hours}`.length === 2
      ? value.hours
      : `${value.hours}`.padStart(2, '0');
  const UIDays =
    `${value.days}`.length === 2
      ? value.hours
      : `${value.days}`.padStart(2, '0');
  document.querySelector('[data-days]').innerText = UIDays;
  document.querySelector('[data-hours]').innerText = UIHours;
  document.querySelector('[data-minutes]').innerText = UIMinutes;
  document.querySelector('[data-seconds]').innerText = UISeconds;
}
