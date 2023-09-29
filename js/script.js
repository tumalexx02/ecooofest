import { ruPage, enPage } from "./pages.js";

// WOW initialization
new WOW().init();
onhashchange = e => {
    history.replaceState(null,"", e.oldURL);
}

document.addEventListener('DOMContentLoaded', () => {
  // First launch of the site and checking the language
  if (!localStorage.getItem('lang')) {
    if (navigator.language === 'ru' || navigator.language === 'ru-RU') {
      localStorage.setItem('lang', 'ru')
      document.querySelector('.page').innerHTML = ruPage;
      document.title = 'Эко-фест'
    } else {
      localStorage.setItem('lang', 'en');
      document.querySelector('.page').innerHTML = enPage;
      document.title = 'Eco-fest'
    }
  }

  // Every time when the site loads, a page with the desired language will be loaded
  if (localStorage.getItem('lang') === 'ru') {
    document.querySelector('.page').innerHTML = ruPage;
    document.title = 'Эко-фест'
  } else {
    document.querySelector('.page').innerHTML = enPage;
    document.title = 'Eco-fest'
  }

  // Scroll using links without changing url
  const hamburgerLinks = document.querySelectorAll('.hamburger__link');
  const headerLinks = document.querySelectorAll('.header__link');

  [...hamburgerLinks, ...headerLinks].forEach((link) => {
    link.addEventListener('click', (e) => {
      if (!link.classList.contains('language-link')) {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView();
      }
    })
  })

  const hamburgerIcon = document.querySelector('.hamburger__icon');
  const hamburgerElement = document.querySelector('.hamburger');

  // Toggle hamburger_active class when hamburger button is clicked
  hamburgerIcon.addEventListener('click', () => {
    hamburgerElement.classList.toggle('hamburger_active');
  });

  // Removing hamburber active class when link in hamburger is clicked
  hamburgerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburgerElement.classList.remove('hamburger_active');
    })
  });

  // Removing hamburger active class when background behind hamburger is clicked
  const hamburgerBg = document.querySelector('.hamburger__background');

  hamburgerBg.addEventListener('click', function() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('hamburger_active');
  });

  // Removing active class when background behind modal window is clicked
  const modalBg = document.querySelector('.modal__bg');

  modalBg.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    const mateCardMobile = document.querySelector('.mate-card_modal');

    modal.classList.remove('modal_active');
    mateCardMobile.classList.remove('mate-card_modal_active')
  });

  // Showing modal window when any button_modal is clicked
  const buttonModal = document.querySelectorAll('.button_modal');
  
  buttonModal.forEach(button => {
    button.addEventListener('click', function() {
      const modal = document.querySelector('.modal');
      const mateCardMobile = document.querySelector('.mate-card_modal');

      modal.classList.toggle('modal_active');
      mateCardMobile.classList.toggle('mate-card_modal_active')
    });
  });

  // Hiding modal window when any modal__close is clicked
  const closeModal = document.querySelector('.modal__close');

  closeModal.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    const mateCardMobile = document.querySelector('.mate-card_modal');

    modal.classList.remove('modal_active');
    mateCardMobile.classList.remove('mate-card_modal_active')
  });


  // Upper show/hide script
  window.addEventListener('scroll', function() {
    const upper = document.querySelector('.upper__link')
    if (window.scrollY > 500) {
      upper.classList.add('upper__link_active');
    } else {
      upper.classList.remove('upper__link_active');
    }
  });

  // Language switching
  const languageButtons = document.querySelectorAll('.language-link');

  languageButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (button.innerHTML === 'English') {
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'en');
        location.reload();
      } else if (button.innerHTML === 'Русский') {
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'ru');
        location.reload();
      }
    })
  })
});
