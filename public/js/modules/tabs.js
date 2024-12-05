document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__item');
  const contents = document.querySelectorAll('.tab-content__item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Видаляємо клас "active" у всіх вкладок і контенту
      tabs.forEach(item => item.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Додаємо клас "active" до вибраної вкладки і відповідного контенту
      tab.classList.add('active');
      document.getElementById(`${tab.id}-content`).classList.add('active');
    });
  });

  // Активуємо першу вкладку за замовчуванням
   tabs[0].classList.add('active');
   contents[0].classList.add('active');
   
});


