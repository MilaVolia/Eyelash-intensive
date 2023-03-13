const links = document.querySelectorAll('.menu__list-link');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('open');
});

const body = document.querySelector('body');
const divs = document.querySelector('.burger');

function handleClick() {
  divs.classList.contains('active')
    ? (body.style.overflow = 'hidden')
    : (body.style.overflow = 'visible');
}

divs.addEventListener('click', handleClick);
