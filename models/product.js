const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Створюємо схему для продукту
const productSchema = new Schema({
  name: {
    type: String,
    required: true, // Назва товару обов'язкова
    trim: true // Видаляє зайві пробіли
  },
  price: {
    type: Number,
    required: true, // Ціна товару обов'язкова
    min: 0 // Ціна не може бути меншою за 0
  },
  category: {
    type: String, // Категорія товару
    required: true
  },
  image: {
    type: String, // Посилання на зображення товару
    required: true
  },
  createdAt: {
    type: Date, // Дата додавання товару
    default: Date.now
  }
});




// Створюємо модель Product на основі схеми
module.exports = mongoose.model('Product', productSchema);