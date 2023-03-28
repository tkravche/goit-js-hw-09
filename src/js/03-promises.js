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
        .then((success) => Notiflix.Notify.success(`✅ Fulfilled promise ${success.position} in ${success.delay}ms`))
        .catch((error) => Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`));
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
          resolve({position, delay});
        } else {
          reject({position, delay});
        }
      }, delay);
    })
  }
}