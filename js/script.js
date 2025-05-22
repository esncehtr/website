document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const chars = '01ハックHACKERエッセンスESSENCE';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = `${fontSize}px monospace`;
        drops.forEach((y, i) => {
            const text = chars.charAt(Math.random() * chars.length | 0);
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }

    setInterval(drawMatrix, 40);

    const nickname = document.getElementById('nickname');
    const originalText = nickname.textContent;
    const charsHack = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
    let iterations = 0;

    function hackEffect() {
        if (iterations < 15) {
            let hackedText = '';
            for (let i = 0; i < originalText.length; i++) {
                hackedText += Math.random() > 0.5 ? charsHack.charAt(Math.random() * charsHack.length | 0) : originalText[i];
            }
            nickname.textContent = hackedText;
            iterations++;
            setTimeout(hackEffect, 80);
        } else {
            nickname.textContent = originalText;
            document.querySelector('.container').classList.add('visible');
        }
    }

    setTimeout(hackEffect, 300);

    const links = document.querySelectorAll('.social-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            audio.play();
        });
        link.addEventListener('click', () => {
            console.log(`[*] Accessing ${link.textContent.slice(2)}...`);
        });
    });
});