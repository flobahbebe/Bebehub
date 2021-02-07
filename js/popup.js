var signup, popupform, closebtn, popupcontainer;

signup = document.querySelector('.signup-btn');
popupform = document.querySelector('.popup-form');
closebtn = popupform.querySelector('.close-btn');
popupcontainer = document.querySelector('.popup-container');


signup.addEventListener('click', () => {
  popupform.classList.remove('hide');
  popupcontainer.classList.remove('hide');
});

closebtn.addEventListener('click', () => {
  popupform.classList.add('hide');
  popupcontainer.classList.add('hide');
});

popupcontainer.addEventListener('click', () => {
  popupform.classList.add('hide');
  popupcontainer.classList.add('hide');
});
