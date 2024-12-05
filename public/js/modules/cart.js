const cartData = localStorage.getItem("cart");

// Перевіряємо, чи існують дані
if (cartData) {
   // Парсимо дані з JSON в об'єкт
   const cart = JSON.parse(cartData);
   cart.forEach(item => {
      const cartItemContainer = document.getElementById('cart-list');
      const cartItem = document.createElement("li");
      cartItem.className = 'cart__list-item';
      cartItem.setAttribute("data-product-id", item.id);
      cartItem.innerHTML = `
            <img src="/assets/img/svg/plus-gray.svg" class="cart__list-item-delete">
            </img>
            <img src="${item.img}" alt="" class="cart__list-item-pic">
            <a href="/product?id=${item.id}"><h3 class="cart__list-item-title">${item.name}</h3></a>
            <div class="about__product-quantity-conteiner cart__list-item-quantity-conteiner" id="cart-quantity">
               <button class="minus" id="minus"> - </button>
               <input type="number" class="quantity" id="quantity" value="${item.quantity}" min="1" max="100">
               <button class="plus" id="plus"> + </button>
            </div>
            <p class="cart__list-item-price">${item.price} ₴</p>
            `;
      cartItemContainer.appendChild(cartItem);
      });

    function updateCartItemUI(cartItem, quantity) {
    const quantityInput = cartItem.querySelector('.quantity');
    quantityInput.value = quantity;  // Оновлюємо значення інпуту кількості
}

// Функція для збереження та оновлення кількості товару в localStorage
function updateCartItem(productId, quantity) {
    const cart = getCart();  // Отримуємо поточну корзину з localStorage
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex >= 0) {
        // Якщо кількість товару більше 0, оновлюємо її
        if (quantity > 0) {
            cart[existingProductIndex].quantity = quantity;
        } else {
            // Якщо кількість товару менша або дорівнює 0, видаляємо товар з корзини
           deleteCartItem();
        }

        saveCart(cart);  // Зберігаємо оновлену корзину
        updateCart();
        updateCartUI();// Оновлюємо лічильник товарів у корзині
    }
}


} else {
   console.log("Дані в Local Storage відсутні");
}



const cartOrderBtn = document.querySelector('.cart__order-btn');
const totalElement = document.querySelector('#cart-total');

if (cartOrderBtn) {
    cartOrderBtn.addEventListener('click', () => {
        const totalValue = totalElement.innerText.replace(/[^0-9.]/g, ''); // Очищаємо текст
        console.log('Збереження значення в LocalStorage:', totalValue);

        // Оновлюємо LocalStorage з правильними параметрами (ключ, значення)
        localStorage.setItem('cartTotal', totalValue);
    });
} else {
    console.error('Кнопку з класом cart__order-btn не знайдено');
}





   