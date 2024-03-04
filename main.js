const outputText = document.querySelector('.ba-form__output');
const form = document.querySelector('.ba-form');
const onClick = (event) => {
  event.preventDefault();
  console.log('works');
  if (form.elements[0].value === '') {
    outputText.innerHTML = 'You have to write your email in the form';
  }
  form.reset();
};
form.elements[1].addEventListener('click', onClick);
