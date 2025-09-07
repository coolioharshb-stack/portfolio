const typewriter = document.querySelector('.typewriter');
const roles = ["Coder", "Game Developer", "On-Demand Robots Supplier"];
let i = 0;  // role index
let j = 0;  // letter index
let isDeleting = false;

function type() {
  let currentRole = roles[i];
  let displayedText = currentRole.substring(0, j);

  typewriter.textContent = displayedText;

  if (!isDeleting && j < currentRole.length) {
    j++;
    setTimeout(type, 120); // typing speed
  } 
  else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50); // deleting speed
  } 
  else if (!isDeleting && j === currentRole.length) {
    // finished typing, pause then start deleting
    isDeleting = true;
    setTimeout(type, 1200);
  } 
  else if (isDeleting && j === 0) {
    // finished deleting, move to next role
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 200);
  }
}

type();
