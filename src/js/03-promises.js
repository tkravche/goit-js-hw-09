import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const amount = e.target.elements.amount.value;
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  if (delay < 0 || step < 0 || amount < 0) {
    Notiflix.Notify.warning(`❗ Please enter a positive number`);
  } else {
    let position = 1;
    for (let i = 0; i < amount; i++) {
      createPromise(position, delay)
      delay += step;
      position += 1;
    }
    e.target.reset();
  }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    })
      .then((message) => Notiflix.Notify.success(message))
      .catch((error) => Notiflix.Notify.failure(error));
  }
}