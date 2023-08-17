'use strict';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const btn = document.querySelectorAll('.show-modal');

function toggleModal() {
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for (const showBtn of btn) {
  showBtn.addEventListener('click', function (e) {
    toggleModal();
  });
}

closeBtn.addEventListener('click', function (e) {
  toggleModal();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    toggleModal();
  }
});
