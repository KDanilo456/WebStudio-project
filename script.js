// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-open-modal]"),
//     closeModalBtn: document.querySelector("[data-close-modal]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", openModal);
//   refs.closeModalBtn.addEventListener("click", closeModal);

//   function openModal() {
//     refs.modal.classList.remove("is-hidden");

//     requestAnimationFrame(() => {
//       refs.modal.classList.add("show");
//     });

//     document.body.classList.add("no-scroll");
//   }

//   function closeModal() {
//     refs.modal.classList.remove("show");


//     setTimeout(() => {
//       refs.modal.classList.add("is-hidden");
//     }, 500); 
//     document.body.classList.remove("no-scroll");
//   }
// })();

document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  openButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  closeButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  function toggleModal(modal) {
    if (!modal) return;
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
});

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
