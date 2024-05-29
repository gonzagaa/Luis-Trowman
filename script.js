const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorOutline.style.left = `${posX}px`
  cursorOutline.style.top = `${posY}px`

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
})


const header = document.querySelector('header.header')

window.addEventListener('scroll', () => {
  const alturaScrollY = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (alturaScrollY < 100) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  } else {
    if (alturaScrollY < 150) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  }
});

  AOS.init({
    duration: 1200,
  });
