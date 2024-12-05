

const userData = document.getElementById('personal-data');
const orderHistory = document.getElementById('order-history');
const orderHistoryImg = document.getElementById('orderHistoryImg');
const userDataImg = document.getElementById('userDataImg');
const historyBlock = document.querySelector('.history'); 
const infoSideBlock = document.querySelector('.user-cab__other'); 
const infoBlock = document.querySelector('.information'); 
const buttons = [userData, orderHistory]; 
// Додаємо клас "btn-active" для кнопок
buttons.forEach(item => {
   item.addEventListener('click', () => {
      // Знімаємо активний клас з усіх кнопок і повертаємо початкові зображення
      buttons.forEach(btn => {
         btn.classList.remove('btn-active');
         

         if (btn === userData) {
            userDataImg.src = '/assets/img/svg/personal-info-green.svg'; // неактивна картинка
            infoBlock.classList.remove('active-page')
            infoSideBlock.classList.remove('active-page')
         } else if (btn === orderHistory) {
            orderHistoryImg.src = '/assets/img/svg/order-history.svg'; // неактивна картинка
            historyBlock.classList.remove('active-page-flex')
         }
      });

      // Додаємо активний клас для поточної кнопки і змінюємо зображення
      item.classList.add('btn-active');

      if (item === userData) {
         userDataImg.src = '/assets/img/svg/personal-info.svg'; // активна картинка
         infoBlock.classList.add('active-page')
         infoSideBlock.classList.add('active-page')
      } else if (item === orderHistory) {
         orderHistoryImg.src = '/assets/img/svg/order-history-white.svg'; // активна картинка
            historyBlock.classList.add('active-page-flex')
      }

   });
});
