const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const PirosmaniRest = require('connect-mongodb-session')(session)
const exhbs = require('express-handlebars')
const helpRoutes = require('./routes/help')
const homeRoutes = require('./routes/home')
const deliveryRoutes = require('./routes/delivery')
const paymentRoutes = require('./routes/payment')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')
const userCabRoutes = require('./routes/user-cab')
const logoutRoutes = require('./routes/logout')
const registerRoutes = require('./routes/register')


const varMiddleware = require('./middleware/variables')
const MONGODB_URI = "mongodb+srv://usernameAdmin:aQzwHsn8U5aahYjH@pirosmani.jkhp9.mongodb.net/pirosmani"
const app = express(); //Запуск сервера
// Ініціалізація об'єктів з handlebars,

 const hbs = exhbs.create({
   defaultLayout: 'main',  //встановлює макет (layout) за замовчуванням, який буде використовуватися для всіх сторінок. У даному випадку це файл main.hbs
   extname: 'hbs' //встановлюємо розширення файлів
})


const restaurant = new PirosmaniRest({
   collection: 'sessions',
   uri: MONGODB_URI
})


app.engine('hbs',hbs.engine) //Реєструє Handlebars як движок для шаблонів з розширенням .hbs
app.set('view engine', 'hbs') //Вказує Express використовувати Handlebars як шаблонний движок для рендерингу HTML
app.set('views', 'pages'); //Встановлює шлях до папки, яка буде використана при рендері, для завантаження файлів з неї (CSS, JS, картинки)


app.use(express.static('public')); //Задали статичну папку з якої отримуємо усі файли для рендеру
app.use(express.urlencoded({ extended: true }))

app.use(session({
   secret: 'some secret value',
   resave: false,
   saveUninitialized: false,
   store: restaurant
}))

// МІДЛВЕАР
app.use(varMiddleware)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Роути сторінок
app.use('/',homeRoutes)
app.use('/delivery',deliveryRoutes)
app.use('/payment',paymentRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)
app.use('/order',orderRoutes)
app.use('/help', helpRoutes)
app.use('/user-cab', userCabRoutes)
app.use('/logout', logoutRoutes)
app.use('/register',registerRoutes)

const PORT = process.env.PORT || 3000

// ЗАПУСК СЕРВЕРА
async function start() {
   try {
     
      await mongoose.connect(MONGODB_URI)

      app.listen(3000, () => {console.log(`Server is running on port :${PORT}`)
   });

   } catch (e) {
      console.log(e)
   }
}

start();



 