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

// Birthday celebration with multiple surprise elements
document.getElementById('celebration-button').addEventListener('click', function() {
    // Change button text
    this.textContent = "Surprise Activated! ✨";
    this.disabled = true;
    
    // Create confetti
    createConfetti();
    
    // Animate heading with a special effect
    const heading = document.getElementById('birthday-heading');
    heading.style.fontSize = '4rem';
    heading.style.textShadow = '0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b';
    
    // Change background to image with a fade effect
    document.body.style.background = 'linear-gradient(rgba(245, 247, 250, 0.7), rgba(195, 207, 226, 0.7)), url("background.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Add floating balloons
    createBalloons();
    
    // Add a birthday message that types itself out
    typeMessage();
    
    // Add sparkles around the cake
    addSparkles();
    
    // Play audio
    const audio = new Audio('birthday-song.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Auto-play prevented:', e));
});

// Create floating balloons function
function createBalloons() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffbe0b', '#a786df', '#ff8fab'];
    const container = document.createElement('div');
    container.className = 'balloons-container';
    document.body.appendChild(container);
    
    for (let i = 0; i < 100; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 5 + 10) + 's';
        balloon.style.animationDelay = (Math.random() * 5) + 's';
        
        // Add balloon string
        const string = document.createElement('div');
        string.className = 'balloon-string';
        balloon.appendChild(string);
        
        container.appendChild(balloon);
    }
}

// Type out a special message function
function typeMessage() {
    const container = document.querySelector('.container');
    const specialMessage = document.createElement('div');
    specialMessage.className = 'special-message';
    container.appendChild(specialMessage);
    
    const message = "You're amazing and I'm so lucky to have you in my life! I hope your day is as wonderful as you are.";
    let i = 0;
    
    const typing = setInterval(() => {
        if (i < message.length) {
            specialMessage.textContent += message.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            specialMessage.classList.add('special-message-done');
        }
    }, 50);
}

// Add sparkles around the cake
function addSparkles() {
    const cake = document.querySelector('.birthday-cake');
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';
    cake.appendChild(sparklesContainer);
    
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (Math.random() * 300 - 50) + 'px';
        sparkle.style.top = (Math.random() * 200 - 50) + 'px';
        sparkle.style.animationDelay = (Math.random() * 2) + 's';
        sparkle.style.animationDuration = (Math.random() * 1 + 1) + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

// Initialize hearts on load
window.onload = function() {
    createHearts();
    
    // Custom name can be set here
    // document.getElementById('signature').innerText = 'John';
};