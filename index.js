const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu_toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
})

// Scroll Reveal
window.sr = ScrollReveal();

// animate the left side
sr.reveal('.animate_left', {
  origin: 'left',
  duration: '1000',
  distance: '25rem',
  delay: 300
});

// animate the right side
sr.reveal('.animate_right', {
  origin: 'right',
  duration: '1000',
  distance: '25rem',
  delay: 600
});

// animate top part
sr.reveal('.animate_top', {
  origin: 'top',
  duration: '1000',
  distance: '25rem',
  delay: 600
});

// animate bottom part
sr.reveal('.animate_bottom', {
  origin: 'bottom',
  duration: '1000',
  distance: '25rem',
  delay: 600
});