// Typing animation for the header subtitle
const texts = ["Web Developer", "UI-UX Designer", "Creator"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('animated-text').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1500); // pause before next word
  } else {
    setTimeout(type, 200);
  }
})();

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').textContent = "Thank you for reaching out!";
  this.reset();
});
