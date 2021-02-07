var us, infor, exit;

us = document.querySelector('.abt-btn');
infor = document.querySelector('.popupform');
exit = infor.querySelector('.exit-btn');

us.addEventListener('click', () => {
  infor.classList.remove('hide');
  popupcontainer.classList.remove('hide');
});

exit.addEventListener('click', () => {
  infor.classList.add('hide');
  popupcontainer.classList.add('hide');
});

popupcontainer.addEventListener('click', () => {
  infor.classList.add('hide');
  popupcontainer.classList.add('hide');
});
