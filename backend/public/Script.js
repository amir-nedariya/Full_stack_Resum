const typeOutput = document.getElementById("type-output");
// const words = ["Web Developer", "Web Designer", "Full Stack Developer",];
const words = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Database Handler",
  "REST API Expert",
  "Problem Solver",
  "Team Player",
  "Fast Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typeOutput.textContent = currentWord.slice(0, charIndex);

    let typingSpeed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);