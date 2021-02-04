const regWrapper = document.querySelector('.reg-wrapper');
const regForm = document.querySelector('.reg-form');
const thanksPopUp = document.querySelector('.thanks');
const crossThanks = document.querySelector('.reg-cross-wrapper--thanks');
const crossForm  = document.querySelector('.reg-cross-wrapper--form');
const submit = document.querySelector('.reg-button--submit');
const inputs = document.getElementsByTagName('input');
const comments = document.querySelector('.contacts-comments');

// console.log(inputs);

function regWrapperToggle() {
  regWrapper.classList.toggle('reg-hidden');
}

function thanksPopUpToggle(){
  thanksPopUp.classList.toggle('thanks-hidden')
}

// submit.addEventListener('click', () => {
//
//   regWrapperToggle()
//   thanksPopUpToggle()
// })

crossThanks.addEventListener('click', () => {
  // thanksPopUpToggle()
  // regWrapperToggle()

  document.location.reload();
})

regForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  regWrapperToggle()
  thanksPopUpToggle()
})
