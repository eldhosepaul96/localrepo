// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
}

// Create confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
    
    const colors = ['#ff6b6b', '#4e89ae', '#43aa8b', '#f8a51b', '#9370db'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Birthday celebration
document.getElementById('celebration-button').addEventListener('click', function() {
    // Change button text
    this.textContent = "Surprise Activated! ✨";
    this.disabled = true;
    
    // Create confetti
    createConfetti();
    
    // Animate heading
    const heading = document.getElementById('birthday-heading');
    heading.style.fontSize = '4rem';
    setTimeout(() => {
        heading.style.fontSize = '3.5rem';
    }, 500);
    
    // Change background to image with a fade effect
    document.body.style.background = 'linear-gradient(rgba(245, 247, 250, 0.7), rgba(195, 207, 226, 0.7)), url("background.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Play audio
    const audio = new Audio('birthday-song.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Auto-play prevented:', e));
    
});

// Initialize hearts on load
window.onload = function() {
    createHearts();
    
    // Custom name can be set here
    // document.getElementById('signature').innerText = 'John';
};