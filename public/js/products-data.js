document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо ID товару з URL (якщо є параметр id в адресі)
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId) {
        console.error('ID продукту не знайдено');
        return;
    }

    // Функція для завантаження даних продукту
    fetch('/data/products.json')  // Тут шлях до твоього JSON файлу
        .then(response => response.json())
        .then(data => {
            // Знаходимо продукт за його ID
            const product = data.find(item => item.id == productId);

            if (product) {
                // Оновлюємо інформацію на сторінці
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-image').setAttribute('src',product.image)
                document.getElementById('product-price').textContent = `${product.price}`;
                document.getElementById('sum').textContent = `${parseFloat(product.price)}`;
                document.getElementById('product-quantity').textContent = `${product.quantityInPack} шт.`;
                document.getElementById('product-reviews').textContent = `Кількість відгуків: ${product.reviewsCount}`;
                document.getElementById('product-info').textContent = `${product.info}`;
                document.getElementById('info-producer').textContent = `${product.infoProducer}`;
                document.getElementById('weight').textContent = `${product.infoWeight}`;
                document.getElementById('calories').textContent = `Калорії: ${product.calories}`;
                document.getElementById('fats').textContent = `Жири: ${product.fats}`;
                document.getElementById('proteins').textContent = `Білки: ${product.proteins}`;
                document.getElementById('carbohydrates').textContent = `Вуглеводи: ${product.carbohydrates}`;
                document.getElementById('mass').textContent = `${product.infoWeight}`;
                document.getElementById('product').setAttribute('data-product-id', product.id);
                
                
            } else {
                console.error('Продукт з таким ID не знайдено');
            }
        })
        .catch(error => {
            console.error('Помилка завантаження даних:', error);
        });
});

  
