// ------------ TEXTAREA ACTIVATION -----------------------------------------

const addCommentBtn = document.querySelector('.cart__make-order-form-comment');
const textarea = document.querySelector('.cart__make-order-form-textarea');
console.log(addCommentBtn,textarea)
addCommentBtn.addEventListener('click', () => {

   addCommentBtn.style.display = "none";
   textarea.style.display = "block";
   textarea.value = '';
   textarea.focus();
})


// ------------------- ORDER SWITCH TABS ------------------------------------

const buttons = document.querySelectorAll('.order__ticket-tabs button');
// Додаємо клас "btn-active" для кнопок
buttons.forEach(item => {
  item.addEventListener('click', () => {

    // Знімаємо активний клас з усіх кнопок
    buttons.forEach(btn => {
      btn.classList.remove('btn-active');
    });

    // Додаємо активний клас для поточної кнопки
    item.classList.add('btn-active');
    
    // Оновлюємо знижку залежно від активної кнопки
    
    // Перевіряємо, яку форму показувати (delivery або takeout)
    if (item.id === 'apply-discount') {
       switchElement(deliveryForm, takeoutForm); // Показуємо форму самовивозу
      } else {
        switchElement(takeoutForm, deliveryForm); // Показуємо форму доставки
      }
   });
});

// ------------- APPLY TAKEOUT DISCOUNT -------------------------------------


// ------------- FORM CHANGE DELIVERY|TAKEOUT ---------------------------------
const deliveryForm = document.querySelector('.delivery');
const takeoutForm = document.querySelector('.takeout');
takeoutForm.style.display = "none";
// Функція перемикання між формами
function switchElement(hide, show) {
    // Ховаємо одну форму і показуємо іншу
    hide.style.display = "none";
    show.style.display = "flex";
}


// ------------------- CUSTOM SELECT ------------------------------
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let activeSelect = null; // Змінна для зберігання відкритого селектора

    selectHeader.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); // Зупиняємо розповсюдження події, щоб клік на хедері не закривав селектор
            let select = this.parentElement;
            
            // Закриваємо інші відкриті селектори
            if (activeSelect && activeSelect !== select) {
                activeSelect.classList.remove('is-active');
            }

            // Тоглимо стан активного селектора
            select.classList.toggle('is-active');
            activeSelect = select.classList.contains('is-active') ? select : null;
        });
    });

    selectItem.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); // Зупиняємо розповсюдження події
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            
            currentText.innerText = text;
            select.classList.remove('is-active'); // Закриваємо селектор після вибору
            activeSelect = null;
        });
    });

    // Закриваємо селектор, якщо клік поза його межами
    document.addEventListener('click', function () {
        if (activeSelect) {
            activeSelect.classList.remove('is-active');
            activeSelect = null;
        }
    });
}

select();


// ------------------------- TOTAL CALCULATOR ------------------------


document.addEventListener('DOMContentLoaded', () => {
   applyDiscount();

   const orderTotalValue = parseFloat(document.getElementById('order__total').innerText.replace(/[^0-9.]/g, ''));
   const priceToPayElement = document.getElementById('to-pay');
   const deliveryDiscount = parseFloat(document.querySelector('#discount').innerText.replace(/[^0-9.]/g, ''));
   const finalPrice = parseFloat(orderTotalValue + deliveryDiscount).toFixed(2);
   priceToPayElement.innerText = `${finalPrice} ₴`;

   function applyDiscount() {
      const takeoutBtn = document.querySelector('#apply-discount');
      const takeoutDiscount = document.querySelector('#discount');
      const switchBtns = document.querySelectorAll('.switch');

      updateOrderTotal();
      // -------------------- ПЕРЕВІРКИ ДЛЯ БЕЗКОШТОВНОЇ ДОСТАВКИ ---------------------------------------
      switchBtns.forEach(item => {
          const savedTotal = document.querySelector('#order__total').innerText.replace(/[^0-9.]/g, '');
         if (savedTotal < 500) {
            takeoutDiscount.innerText = `100 ₴`;
         }
         else {
            takeoutDiscount.innerText = `0 ₴`;
         }
         item.addEventListener('click', () => {
            const savedTotal = document.querySelector('#order__total').innerText.replace(/[^0-9.]/g, '');
            if (savedTotal <= 499) {

               takeoutDiscount.innerText = `100 ₴`
               if (takeoutBtn.classList.contains('btn-active')) {
                  takeoutDiscount.innerText = `0 ₴`;
               }
               else {
                  if (savedTotal <= 500) {
                     takeoutDiscount.innerText = `100 ₴`;
                  }
                  else {
                     takeoutDiscount.innerText = `0 ₴`;
                  }
               }
            } else {
                     takeoutDiscount.innerText = `0 ₴`;
            }
            const orderTotalValue = parseFloat(document.getElementById('order__total').innerText.replace(/[^0-9.]/g, ''));
            const priceToPayElement = document.getElementById('to-pay');
            const deliveryDiscount = parseFloat(document.querySelector('#discount').innerText.replace(/[^0-9.]/g, ''));
            const activeBtn = document.querySelector('#apply-discount');
            const finalPrice = parseFloat(orderTotalValue + deliveryDiscount).toFixed(2);
            
            const takeoutDiscountValue = 0.2;
            console.log(finalPrice)
            const finalPriceTakeout = finalPrice-(finalPrice * takeoutDiscountValue);
            console.log(finalPriceTakeout)
            priceToPayElement.innerText = `${finalPrice} ₴`;
            if (activeBtn.classList.contains("btn-active")){
                   priceToPayElement.innerText = `${parseFloat(finalPriceTakeout).toFixed(2)} ₴`
            }
            else {
               priceToPayElement.innerText = `${(finalPrice)} ₴`;
            }
         })
      })
}

    // Функція для отримання загальної суми з localStorage
    function getTotalFromLocalStorage() {
        const savedTotal = localStorage.getItem('cartTotal');
        return savedTotal ? parseFloat(savedTotal) : 0;
    }

    // Функція для збереження загальної суми в localStorage

    // Функція для оновлення елемента з id order__total
    function updateOrderTotal() {
         const savedTotal = getTotalFromLocalStorage(); // Отримуємо значення з localStorage
       const orderTotalElement = document.getElementById('order__total'); // Отримуємо елемент за id
       const orderTotalValue = document.getElementById('order__total').innerText.replace(/[^0-9.]/g, '');
       const priceToPayElement = document.getElementById('to-pay');
       const deliverytDiscount = document.querySelector('#discount').innerText.replace(/[^0-9.]/g, '');
       const activeBtn = document.querySelector('#apply__discount');

       
       if (orderTotalElement) {
          // Оновлюємо контент елемента на значення з localStorage
          orderTotalElement.innerText = `${savedTotal.toFixed(2)} ₴`;
         } else {
            console.error('Елемент з id order__total не знайдено');
         }
         
        
      }
      
});

