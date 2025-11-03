const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const mainPage = document.getElementById('mainPage');

function openMenu() {
    hamburgerBtn.classList.add('active');
    menuOverlay.classList.add('active');
    mainPage.style.filter = 'blur(2px)';

    // 🔒 Блокуємо прокрутку
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburgerBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
    mainPage.style.filter = 'none';

    // 🔓 Повертаємо прокрутку
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    if (menuOverlay.classList.contains('active') && 
        !e.target.closest('.menu-overlay') && 
        !e.target.closest('.hamburger-btn')) {
        closeMenu();
    }
});
