// _________________ЗМІННІ ТА КОНСТАНТИ________________________________
const cartSlider = document.querySelector('.price-range');
let currentAmount = document.querySelector('.current-amount');
const deliveryInfo = document.querySelector('.calc-info');
const freeDeliveryThreshold = 500;
const promocode = "bonus"; // Значення промокоду
const discount = 0.1; // 10% знижка за промокодом
// _____________________________________________________________________
// Функція для оновлення слайдера та доставки
function updateSlider(sum) {
    let value = sum;
    currentAmount = value;

    // Оновлюємо відсоток для стилю фону, але якщо значення більше за поріг,
    // обмежуємо його 100%.
    let percentage = (value / freeDeliveryThreshold) * 100;
    
    // Якщо відсоток більше 100%, встановлюємо його на 100.
    if (percentage > 100) {
        percentage = 100;
    }

    cartSlider.style.background = `linear-gradient(to right, #00AC4E ${percentage}%, #ddd ${percentage}%)`;

    // Якщо значення перевищує поріг, встановлюємо повзунок на максимальне значення.
    if (value >= freeDeliveryThreshold) {
        cartSlider.value = freeDeliveryThreshold; // Залишаємо слайдер на максимальному значенні
        deliveryInfo.innerText = "У вас безкоштовна доставка!";
    } else {
        // В іншому випадку оновлюємо значення слайдера відповідно до поточного значення.
        cartSlider.value = value;
        let remaining = freeDeliveryThreshold - value;
        deliveryInfo.innerText = `Залишилось ${remaining} грн до безкоштовної доставки`;
    }
}

// Функція для обробки промокоду та підрахунку знижки
function applyPromocode(sum) {
    const promocodeInput = document.querySelector('.cart__promocode-form-input');
    const promocodeValue = document.querySelector('.cart__order-promocode-value');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartTotal) {
        if (promocodeInput && promocodeInput.value.toLowerCase() === promocode.toLowerCase()) {
        let discountValue = sum * discount;
        promocodeValue.innerText = `- ${discountValue.toFixed(2)} ₴`;
        let total = sum - discountValue;
        cartTotal.innerText = `${total.toFixed(2)} ₴`; // Виводимо знижку
    } else {
        promocodeValue.innerText = `0 ₴`;
        cartTotal.innerText = `${sum.toFixed(2)} ₴`; // Показуємо загальну суму без знижки
    }
    }
}

// Функція для оновлення загальної вартості товарів у корзині
function calculateTotal() {
    const cart = getCart();
    let sum = 0;

    cart.forEach(item => {
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity);

        // Перевіряємо, щоб ціна та кількість були коректними числами
        if (!isNaN(price) && !isNaN(quantity)) {
            sum += price * quantity;
        }
    });

    if (document.getElementById('cart-sum')) {
        const cartSum = document.getElementById('cart-sum');
        cartSum.innerText = `${sum.toFixed(2)} ₴`;  // Оновлюємо загальну суму в DOM
    }

    applyPromocode(sum);  // Викликаємо функцію для обробки промокоду
    updateSlider(sum);  // Оновлюємо слайдер після підрахунку
    return sum;
}

// Оновлення корзини після змін
function updateCartUI() {
    const cartEmpty = document.getElementById('no-data');
    const order = document.getElementById('order');
    const cart = getCart();
    const totalQuantity = cart.length;

    if (order) {
        if (totalQuantity === 0) {
        cartEmpty.style.display = "flex";
        order.style.display = "none";
    } else {
        cartEmpty.style.display = "none";
        order.style.display = "flex";
    }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    function updateTotal() {
        const priceElement = document.querySelector('#product-price');
        const quantityInput = document.querySelector('.quantity');
        const totalElement = document.querySelector('#sum');
        
        if (priceElement && quantityInput && totalElement) {
            console.log('Ціна до очищення:', priceElement.innerText);
            console.log('Кількість:', quantityInput.value);

            // Очищаємо ціну від символів, окрім цифр і десяткових крапок
            const price = parseFloat(priceElement.innerText);
            const quantity = parseInt(quantityInput.value);
        
            console.log('Очищена ціна:', price);
            console.log('Кількість після парсингу:', quantity);
        
            // Перевіряємо, чи обидва значення є числами
            if (!isNaN(price) && !isNaN(quantity)) {
                const total = (price * quantity).toFixed(2);
                totalElement.innerText = `${total}`;
            } else {
                console.error('Неправильні дані: ціна або кількість не є числами.');
                totalElement.innerText = '0.00';
            }
        } else {
            console.error('Не знайдено елементи ціни, кількості або загальної суми.');
        }
        
    }

    // Викликаємо `updateTotal()` одразу після завантаження сторінки, щоб перенести значення з #product-price у .sum
    setTimeout(() => {
        updateTotal(); // Викликаємо після затримки
    }, 100); // 100 мс затримка

    // Додаємо слухач подій для зміни кількості
    const quantityInput = document.querySelector('.quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', updateTotal); // Передаємо функцію без виклику
    }

    // Функція для встановлення логіки плюс/мінус кнопок
    function setupQuantityButtons() {
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const quantityInput = document.querySelector('.quantity');
        
    // Функція для збільшення кількості
    function plusTougle() {
        let count = parseInt(quantityInput.value);
        if (isNaN(count) || count < 1) {
            count = 1;
        }
        if (count < 100) {
            count++;
        }
        quantityInput.value = count;
        updateTotal(); // Оновлюємо загальну суму після зміни
    }

    // Функція для зменшення кількості
    function minusTougle() {
        let count = parseInt(quantityInput.value);
        if (isNaN(count) || count < 1) {
            count = 1;
        }
        if (count > 1) {
            count--;
        }
        quantityInput.value = count;
        updateTotal(); // Оновлюємо загальну суму після зміни
    }

    if (plusBtn && minusBtn && quantityInput) {
        // Додаємо обробники подій для кнопок
        plusBtn.addEventListener('click', plusTougle);
        minusBtn.addEventListener('click', minusTougle);

        // Перевіряємо, чи є quantityInput всередині елемента з класом 'order'
        if (quantityInput.closest('.order')) {
            const inputs = document.querySelectorAll('.cart__list-item-quantity-conteiner');
            const quantityInputs = document.querySelectorAll('.quantity');
            console.log('Інпут знайдений всередині батьківського елемента з класом "order"');
            
            // Вимикаємо інпут
            inputs.forEach(input => {
                input.style.opacity = "0.5";
                quantityInputs.forEach(quantityInput => {
                    quantityInput.disabled = true;
                })
            })
            
            // Видаляємо обробники подій для кнопок
            plusBtn.removeEventListener('click', plusTougle);
            minusBtn.removeEventListener('click', minusTougle);
        }
    } else {
        console.log('Елементів для обробки не знайдено');
    }
}

    setupQuantityButtons(); // Встановлюємо обробники подій для кнопок плюс/мінус
    
    calculateTotal(); // Підрахунок загальної суми
    updateCartCount(); // Оновлення кількості товарів в кошику
    updateCartUI();  // Оновлення UI корзини
    
    // Оновлення після зміни промокоду
    const promocodeBtn = document.querySelector('.cart__promocode-form-btn');
    if (promocodeBtn) {
        promocodeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            applyPromocode(calculateTotal()); // Оновлюємо суму після введення промокоду
        });
    } else {
        console.error('Елемент .cart__promocode-form-btn не знайдено');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const promocode = "bonus"; // Значення промокоду
    const discount = 0.1; // 10% знижка за промокодом

    // Функція для збереження загальної суми в localStorage
    function saveTotalToLocalStorage(total) {
        localStorage.setItem('cartTotal', total.toFixed(2)); // Зберігаємо загальну суму як рядок
    }

    // Функція для отримання збереженої суми з localStorage
    function getTotalFromLocalStorage() {
        const savedTotal = localStorage.getItem('cartTotal');
        return savedTotal ? parseFloat(savedTotal) : 0;
    }

    // Функція для застосування промокоду та підрахунку знижки
    function applyPromocode(sum) {
        const promocodeInput = document.querySelector('.cart__promocode-form-input');
        const promocodeValue = document.querySelector('.cart__order-promocode-value');
        const cartTotalElement = document.getElementById('cart-total');
        let total = sum;

        if (promocodeInput && promocodeInput.value.toLowerCase() === promocode.toLowerCase()) {
            const discountValue = sum * discount;
            promocodeValue.innerText = `- ${discountValue.toFixed(2)} ₴`;
            total = sum - discountValue;
        } else {
            promocodeValue.innerText = `0 ₴`;
        }

        // Оновлюємо DOM з новою сумою
        if (cartTotalElement) {
            cartTotalElement.innerText = `${total.toFixed(2)} ₴`;
        }

        // Зберігаємо загальну суму з урахуванням промокоду в localStorage
        saveTotalToLocalStorage(total);

        return total; // Повертаємо оновлену суму
    }

    // Функція для підрахунку загальної вартості товарів у кошику
    function calculateTotal() {
        const cart = getCart(); // Отримуємо корзину з localStorage або іншого джерела
        let sum = 0;

        cart.forEach(item => {
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity);

            if (!isNaN(price) && !isNaN(quantity)) {
                sum += price * quantity;
            }
        });

        const finalTotal = applyPromocode(sum); // Підраховуємо загальну суму після застосування промокоду
        return finalTotal; // Повертаємо фінальну загальну суму
    }

    // Оновлення відображення кількості товарів у кошику та загальної суми
    function updateCartUI() {
        const cartEmpty = document.getElementById('no-data');
        const order = document.getElementById('order');
        const cart = getCart(); // Отримуємо корзину
        const totalQuantity = cart.length;

        if (order) {
            if (totalQuantity === 0) {
                cartEmpty.style.display = "flex";
                order.style.display = "none";
            } else {
                cartEmpty.style.display = "none";
                order.style.display = "flex";
            }
        }

        const total = calculateTotal(); // Оновлюємо загальну суму
        saveTotalToLocalStorage(total); // Зберігаємо загальну суму в localStorage
    }

    // Підрахунок та оновлення суми при завантаженні сторінки
    calculateTotal();
    updateCartUI();

    // Обробка промокоду після кліку на кнопку
    const promocodeBtn = document.querySelector('.cart__promocode-form-btn');
    if (promocodeBtn) {
        promocodeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const total = calculateTotal(); // Оновлюємо загальну суму після промокоду
            saveTotalToLocalStorage(total); // Зберігаємо загальну суму після застосування промокоду
        });
    } else {
        console.error('Елемент .cart__promocode-form-btn не знайдено');
    }

    // Оновлення після кліку на кнопку з класом cart__order-btn
    const orderBtn = document.querySelector('#make-order');
    if (orderBtn) {
        orderBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const total = calculateTotal(); // Оновлюємо загальну суму
            saveTotalToLocalStorage(total); // Зберігаємо загальну суму після кліку на "Замовити"
        });
    } else {
        console.error('Елемент .cart__order-btn не знайдено');
    }

    // Завантаження збереженої загальної суми з localStorage при завантаженні сторінки
    const savedTotal = getTotalFromLocalStorage();
    if (savedTotal) {
        const cartTotalElement = document.getElementById('cart-total');
        if (cartTotalElement) {
            cartTotalElement.innerText = `${savedTotal.toFixed(2)} ₴`;
        }
    }

    

});
