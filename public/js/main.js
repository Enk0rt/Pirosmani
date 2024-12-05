document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.products__card');

    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        const stars = card.querySelectorAll('.star');
        const averageRatingElement = card.querySelector('.count');
        let ratings = JSON.parse(localStorage.getItem(`ratings-${productId}`)) || [];

        function updateAverageRating() {
            const total = ratings.reduce((acc, rating) => acc + rating, 0);
            const average = ratings.length ? (total / ratings.length).toFixed(1) : 0;
            averageRatingElement.textContent = average;

            const averageRounded = Math.round(average);
            stars.forEach((star, index) => {
                if (index < averageRounded) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-value'));
                ratings.push(rating);
                localStorage.setItem(`ratings-${productId}`, JSON.stringify(ratings));
                updateAverageRating();
            });

            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-value'));
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                stars.forEach(s => s.classList.remove('hover'));
            });
        });

        updateAverageRating();
    });
    
    
   

});
    
// Функція для отримання корзини з LS
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
    
}

//Функція для збереження корзини в LS
function saveCart(cart) {
    const cartCountValue = document.querySelector('.cart-count-num');
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCountValue.textContent = cart.length;
    
    updateCartCount();  // Оновлюємо кількість товарів в кошику
    calculateTotal();  // Оновлюємо загальну суму
}

//Функція для додавання товарів у корзину і оновлення даних
function addToCart(productId, productName, productImg, productPrice) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    const cardValue = document.getElementById('quantity');
    let quantityValue = 1;  // За замовчуванням додаємо 1 товар

    // Якщо інпут для кількості існує і значення більше 0
    if (cardValue && parseInt(cardValue.value) > 0) {
        quantityValue = parseInt(cardValue.value);  // Встановлюємо кількість відповідно до інпуту
    }

    // Перевіряємо, чи товар вже є в корзині
    if (existingProductIndex >= 0) {
        // Якщо товар є, додаємо кількість товару з інпуту або 1
        cart[existingProductIndex].quantity += quantityValue;
    } else {
        // Якщо товару немає, додаємо його з кількістю 1 або з кількістю, введеною користувачем
        cart.push({
            id: productId,
            name: productName,
            quantity: quantityValue,  // Додаємо кількість товару
            img: productImg,
            price: productPrice
        });
    }
    saveCart(cart);
    updateCartCount();
    calculateTotal();
    
    updateCartUI();
}

// Функція оновлення даних корзини, оновлення лічильника та відображення/приховування блоків які залежать від наповнення корзини
function updateCartCount() {
    const cart = getCart();
    const cartCountValue = document.querySelector('.cart-count-num');
    const totalQuantity = cart.length;
    cartCountValue.textContent = totalQuantity;  // Показуємо загальну кількість товарів у корзині
    const cartCount = document.querySelector('.cart-count');
    if (totalQuantity === 0) {
        cartCount.style.display = 'none';
    }
    else {
        cartCount.style.display = 'block';
    }
    
}

// Функція оновлення значення кількості товару в Input
function updateCartItemUI(cartItem, quantity) {
    const quantityInput = cartItem.querySelector('.quantity');
    quantityInput.value = quantity;
    
}

// Функція видалення карток товарів з корзини
function deleteCartItem() {
    const deleteBtns = document.querySelectorAll('.cart__list-item-delete');

    
    deleteBtns.forEach(btn => {
        // Перевіряємо, чи кнопка знаходиться в елементі з класом 'order'
        if (btn.closest('.order')) {
            btn.style.display = "none";  // Ховаємо кнопку, якщо вона знаходиться в батьківському елементі 'order'
        }
    });
    const cart = getCart();

    deleteBtns.forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.closest('.cart__list-item');  // Знаходимо батьківський елемент, де зберігається товар
            const productId = Number(cartItem.getAttribute('data-product-id'));  // Отримуємо ID товару

            const indexToRemove = cart.findIndex(item => item.id === productId);

            if (indexToRemove >= 0) {
                cart.splice(indexToRemove, 1);  // Видаляємо товар з корзини
                
                saveCart(cart);  // Зберігаємо оновлену корзину
                cartItem.remove();  // Видаляємо елемент з DOM після видалення з корзини
                updateCartCount();  // Оновлюємо UI (кількість товарів у корзині)
                calculateTotal();
                updateCartUI();
                
            }
        });
    });
    
}

// Функція оновлення даних корзини в LS
function updateCartItem(productId, quantity) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex >= 0) {
        if (quantity > 0) {
            cart[existingProductIndex].quantity = quantity;
        } else {
            deleteCartItem();
        }

        saveCart(cart);
        updateCartCount();
        calculateTotal();
    }
}

// Функція обробники для кнопок "плюс" і "мінус" на сторінці корзини
function initializeCartButtons() {
    const cartItems = document.querySelectorAll(".cart__list-item");

    cartItems.forEach(cartItem => {
        const productId = Number(cartItem.getAttribute('data-product-id'));
        const cartPlus = cartItem.querySelector(".plus");
        const cartMinus = cartItem.querySelector(".minus");
        const quantityInput = cartItem.querySelector('.quantity');
        // Очищуємо старі обробники подій, щоб не було дублювання
        cartPlus.replaceWith(cartPlus.cloneNode(true));
        cartMinus.replaceWith(cartMinus.cloneNode(true));

        const newCartPlus = cartItem.querySelector(".plus");
        const newCartMinus = cartItem.querySelector(".minus");

        // Обробник для кнопки "плюс"
        newCartPlus.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity < 100) {
                currentQuantity++;  // Збільшуємо кількість
            }
            updateCartItemUI(cartItem, currentQuantity);
            updateCartItem(productId, currentQuantity);  // Оновлюємо в localStorage
            calculateTotal();

        });

        // Обробник для кнопки "мінус"
        newCartMinus.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                currentQuantity--;  // Зменшуємо кількість
                updateCartItemUI(cartItem, currentQuantity);
                updateCartItem(productId, currentQuantity);  // Оновлюємо в localStorage
                calculateTotal();

            }
        });
    });
}

// Функція для оновлення ЛС, в залежності від зміни користувачем значення в інпуті у картці товару в корзині
function initializeQuantityInputs() {
    const quantityInputs = document.querySelectorAll('.cart__list-item .quantity');

    quantityInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            let newQuantity = parseInt(event.target.value);
            const cartItem = input.closest('.cart__list-item');
            const productId = Number(cartItem.getAttribute('data-product-id'));

            // Перевіряємо, чи введене значення є числом
            if (isNaN(newQuantity)) {
                newQuantity = 1; // Якщо введено некоректне значення, ставимо 1
            }

            // Обмежуємо значення від 1 до 100
            if (newQuantity < 1) {
                newQuantity = 1; // Мінімальне значення 1
            } else if (newQuantity > 100) {
                newQuantity = 100; // Максимальне значення 100
            }

            // Оновлюємо значення в інпуті та в localStorage
            input.value = newQuantity;
            updateCartItem(productId, newQuantity);  // Оновлюємо кількість товару в кошику і зберігаємо в LS
        });

        // Відстежуємо подію "blur", щоб після виходу з поля перевірити значення
        input.addEventListener('blur', (event) => {
            if (event.target.value === '') {
                event.target.value = 1; // Якщо поле порожнє, автоматично встановлюємо 1
            }
        });
    });
}

// Ініціалізація подій на сторінці
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо `productId` з URL сторінки
    const urlParams = new URLSearchParams(window.location.search);
    const pageProductId = urlParams.get('id');  // Якщо `productId` є частиною URL, наприклад, ?id=123
    
    // Додаємо товар в корзину при натисканні на кнопку
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('to-cart') || event.target.closest('.to-cart')) {
            const button = event.target.classList.contains('to-cart') ? event.target : event.target.closest('.to-cart');
            const productItem = button.closest('.cart-item');  // Знайшли товар, який додається
            let productImg = '';

            // Якщо картинка є в межах productItem, отримаємо її
            const imgElement = productItem ? productItem.querySelector('.cart-img') : null;
            
            if (imgElement) {
                productImg = imgElement.getAttribute('src');  // Якщо картинка в productItem, беремо її
            } else if (pageProductId) {
                // Якщо картинка не знайдена, шукаємо її по всій сторінці з `data-product-id`
                const imgById = document.querySelector('.cart-img');
                if (imgById) {
                    productImg = imgById.getAttribute('src');
                    console.log(productImg)
                }
            }

            const productId = Number(productItem ? productItem.getAttribute('data-product-id') : pageProductId);

            // Отримання ціни та назви товару
            let productPrice = productItem.querySelector('.cart-price').innerText;
            productPrice = productPrice.replace(/[^0-9.]/g, '');
            const productName = productItem.querySelector('.cart-name').innerText;

            // Додаємо товар в корзину з переданим зображенням, ціною, і назвою
            addToCart(productId, productName, productImg, productPrice);  
        }
        
    });
    deleteCartItem();
    calculateTotal();
    initializeCartButtons();
    initializeQuantityInputs();
    updateCartCount();

     if (document.querySelector('.about')) { // Перевірка на сторінку товару
        calculateTotal();  // Це важливо для коректної роботи слайдера на сторінці товару
    }
    // Оновлюємо кількість товарів у корзині при завантаженні сторінки
    window.addEventListener('storage', (event) => {
        if (event.key === 'cart') {
            updateCartUI();
            calculateTotal();
            
        }
    });
  
   
});
updateCartCount();