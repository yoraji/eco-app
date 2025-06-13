const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  testimonials[current].classList.remove('active');
  current = (current - 1 + testimonials.length) % testimonials.length;
  testimonials[current].classList.add('active');
});
