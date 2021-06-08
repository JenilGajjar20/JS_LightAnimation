let lightPosition = document.documentElement;

lightPosition.addEventListener('mousemove', e => {
    lightPosition.style.setProperty('--x', e.clientX + 'px');
    lightPosition.style.setProperty('--y', e.clientY + 'px');
});