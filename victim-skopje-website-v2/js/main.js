const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
const form = document.getElementById('donation-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your donation of €' + form.querySelector('input').value + '!');
  form.reset();
});

const toggle = document.getElementById('lang-toggle');
toggle.addEventListener('click', () => {
  const enElements = document.querySelectorAll('[lang="en"]');
  const mkElements = document.querySelectorAll('[lang="mk"]');
  const isMK = mkElements[0].style.display === 'none' ? false : true;

  enElements.forEach(e => e.style.display = isMK ? 'block' : 'none');
  mkElements.forEach(e => e.style.display = isMK ? 'none' : 'block');
  toggle.textContent = isMK ? '🇲🇰 Македонски' : '🇬🇧 English';
});
