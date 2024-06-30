   // Модальное окно
   window.addEventListener('DOMContentLoaded', () => {
    const modalTrigger = document.querySelectorAll('.search-box-button'),
    modalCloseBtn = document.querySelector('.modal-close-button'),
    modalWindow = document.querySelector('.modal-container');

    // Открываем модальное окно
    modalTrigger.forEach(item => {
      item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
      });
    });

    // Закрываем модальное окно
    modalCloseBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none';
    });

    // Закрываем по кнопке ESC
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key === "Escape") {
        modalWindow.style.display = 'none';
      }
    });

  });
