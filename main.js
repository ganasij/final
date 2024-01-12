
const formEl =document.querySelector('.form');
const formNameEl = document.querySelector('.form .inputbox .name');
const formTitleEl = document.querySelector('.form .inputbox .title');
const formPhoneEl = document.querySelector('.form .inputbox .phone');
const formEmailEl = document.querySelector('.form .inputbox .email');

const cardEl = document.querySelector('.card');
const cardNameEl = document.querySelector('.card .text .name');
const cardTitleEl = document.querySelector('.card .text .title .value');
const cardPhoneEl = document.querySelector('.card .text .phone .value');
const cardEmailEl = document.querySelector('.card .text .email .value');

const createCardBtn = document.querySelector('.form .btn');

createCardBtn.addEventListener('click', function () {
  cardEl.classList.add('show'); //css ☞ .card.show 항목 존재
  cardNameEl.innerHTML = formNameEl.value;
  cardTitleEl.innerHTML = formTitleEl.value;
  cardPhoneEl.innerHTML = formPhoneEl.value;
  cardEmailEl.innerHTML = formEmailEl.value;
});
