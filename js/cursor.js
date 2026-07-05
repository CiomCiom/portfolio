(function () {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    document.documentElement.classList.add('has-custom-cursor');

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const EASE = 0.15;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        ring.classList.add('is-visible');
    });

    document.querySelectorAll('img').forEach((img) => {
        img.addEventListener('mouseenter', () => ring.classList.add('is-hovering-image'));
        img.addEventListener('mouseleave', () => ring.classList.remove('is-hovering-image'));
    });

    function animate() {
        ringX += (mouseX - ringX) * EASE;
        ringY += (mouseY - ringY) * EASE;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
})();