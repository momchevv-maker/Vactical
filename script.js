// Лека анимация при скрол за елементи с клас .reveal
const revealElements = document.querySelectorAll('.reveal');
const triggerBottom = window.innerHeight * 0.85;

function handleReveal() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);