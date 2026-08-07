const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelector('.signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.innerHTML = 'You’re on the list <span>✓</span>';
  event.currentTarget.querySelector('input').disabled = true;
});
