const form = document.querySelector('.feedback-form');
const textArea = form.elements.message;
const input = form.elements.email;
const localStorageKey = 'feedback-form-state';

textArea.value = localStorage.getItem(localStorageKey) ?? '';
input.value = localStorage.getItem(localStorageKey) ?? '';

window.addEventListener('DOMContentLoaded', () => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  textArea.value = storedData.message ?? '';
  input.value = storedData.email ?? '';
});

form.addEventListener('input', evt => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('email: ', evt.target.elements.email.value);
  console.log('message: ', evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
