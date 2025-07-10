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
