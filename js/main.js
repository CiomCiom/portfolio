// main.js — точка входа для интерактивности сайта.
// Пока функциональности нет: вёрстка полностью на HTML/CSS.
// Сюда можно будет добавить, например, фильтрацию "Other projects" по годам,
// или lazy-load для галерей в карточках проектов.


// main.js — точка входа для интерактивности сайта.
// Пока функциональности нет: вёрстка полностью на HTML/CSS.
// Сюда можно будет добавить, например, фильтрацию "Other projects" по годам,
// или lazy-load для галерей в карточках проектов.

// Lightbox: клик по картинке открывает её увеличенную версию
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightbox');
    const overlayImg = document.getElementById('lightbox-img');
    const overlayCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');

    if (!overlay || !overlayImg) return;

    const clickableImages = document.querySelectorAll('.js-lightbox');

    function openLightbox(img) {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlayCaption.textContent = img.alt;
        overlay.classList.add('is-open');
    }

    function closeLightbox() {
        overlay.classList.remove('is-open');
    }

    clickableImages.forEach((img) => {
        img.classList.add('lightbox-trigger');
        img.addEventListener('click', () => openLightbox(img));
    });

    // Закрытие по клику на фон (но не на саму картинку/подпись)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Закрытие по кнопке с иконкой
    closeBtn.addEventListener('click', closeLightbox);

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});