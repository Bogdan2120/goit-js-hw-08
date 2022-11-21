import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
const FEEDBACK_FORM_STATE = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarera();

const fromData = {};

function onFormSubmit(e) {
  e.preventDefault();

  const saveText = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  console.log(saveText);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function onTextareaInput(e) {
  fromData[e.target.name] = e.target.value;
  const valueForm = JSON.stringify(fromData);

  localStorage.setItem(FEEDBACK_FORM_STATE, valueForm);
}

function populateTextarera() {
  const saveText = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  if (saveText) {
    refs.message.value = saveText.message || '';
    refs.email.value = saveText.email || '';
  }
}
