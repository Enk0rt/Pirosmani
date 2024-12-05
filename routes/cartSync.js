const { Router } = require('express');
const log = require('../middleware/log-check');
const User = require('../models/user');

const router = Router();


// Оновлений маршрут для синхронізації кошика
router.post('/sync', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Користувач не авторизований' });
        }

        const userId = req.session.user._id;
        const cartItems = req.body.cart;

        // Додаємо перевірку та виводимо в консоль cartItems
        console.log('Отримані товари для додавання в кошик:', cartItems);

        if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
            return res.status(400).json({ message: 'Кошик пустий або дані передано некоректно' });
        }

        // Формуємо об’єкти для кожного товару
        const updatedCartItems = cartItems.map(item => ({
            productId: item.productId || new mongoose.Types.ObjectId(), 
            count: item.count || 1,
            name: item.name,
            price: item.price
        }));

        // Оновлюємо масив items у полі cart користувача
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { 'cart.items': updatedCartItems }, // Вставляємо items у cart
            { new: true, runValidators: true } // Оновлений документ повертається
        );

        console.log('Оновлений кошик користувача:', updatedUser.cart.items);

        res.status(200).json({ message: 'Кошик синхронізовано' });
    } catch (error) {
        console.error('Помилка при оновленні кошика:', error);
        res.status(500).json({ message: 'Не вдалося оновити кошик' });
    }
});




module.exports = router;
