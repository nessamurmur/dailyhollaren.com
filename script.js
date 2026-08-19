const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

const currentDate = document.querySelector('#current-date');
if (currentDate) {
  const now = new Date();
  currentDate.textContent = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Toronto',
  }).format(now);
  currentDate.dateTime = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/Toronto',
  }).format(now);
}

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
