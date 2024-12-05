
let navItemBtn = document.getElementById('loginBtn');


let loginPopUp = {
   image: "/assets/img/svg/person-gray.svg",
   close: "/assets/img/svg/plus.svg",
   title: "Увійти в особистий кабінет",
   btn: "Увійти",
   additional: "Вперше у нас?",
   link: "Зареєструватися"
};

let signUpPopUp = {
   image: "/assets/img/svg/person-gray.svg",
   close: "/assets/img/svg/plus.svg",
   title: "Реєстрація",
   btn: "Зареєструватися",
   additional: "Уже маєте акаунт?",
   link: "Увійти"
};
let sendMail = {
   image: "/assets/img/svg/mail.svg",
   close: "/assets/img/svg/plus.svg",
   title: "Підпишіться на нашу розсилку і отримайте промокод на 250 грн!",
   btn: "Надіслати",
};



const modals = document.createElement('div');
document.addEventListener('DOMContentLoaded', function () {
    modals.className = 'modals';

    const modalsOverlay = document.createElement('div');
    modalsOverlay.className = 'modals__overlay';
    modals.appendChild(modalsOverlay);

    const modalsContent = document.createElement('div');
    modalsContent.className = 'modals__content';
    modalsOverlay.appendChild(modalsContent);

    document.body.appendChild(modals);
    
    // Функція для закриття модального вікна
   const closeModal = () => {
        modalsContent.classList.add('fade-out');
        modalsOverlay.classList.remove('show');
        setTimeout(() => {
            modals.style.display = 'none';
            modalsContent.classList.remove('fade-out', 'show');
            modalsContent.innerHTML = '';
        }, 300);
    };
    
    // Функція для оновлення контенту модального вікна
   const updateModalContent = (content) => {
        modalsContent.classList.add('fade-out');
        setTimeout(() => {
            modalsContent.innerHTML = content;
            modalsContent.classList.remove('fade-out');
            modalsContent.classList.add('show');
        }, 300);
    };  
    window.addEventListener('beforeunload', closeModal);
    // Відкриття модалки з логіном
    const openBookModal = () => {
        modalsContent.classList.add('big');
        modalsContent.classList.remove('mail');
            updateModalContent(`
                <img src="/assets/img/svg/plus.svg" alt="Close icon" class="modals__content-close">
                <h2 class="modals__content-title booking-title">Бронювання столу</h2>
                <form class="modals__content-form">
                    <input type="name" class="modals__content-form-name booking-input input" placeholder="Ім'я">
                    <div class="modals__content-form-container">
                    <div class="left">
                    <input type="tel" class="modals__content-form-tel booking-input input" placeholder="Телефон">
                    <input type="time" class="modals__content-form-time booking-input input" placeholder="час">
                    </div>
                    <div class="right">
                    <input type="number" class="modals__content-form-num booking-input input" placeholder="Кількість людей">
                    <input type="date" class="modals__content-form-date booking-input input" placeholder="Дата">
                    </div>
                    </div>
                    <button type="submit" class="modals__content-form-btn mt-25 btn">Забронювати</button>
                </form>
            `);
            modals.style.display = 'block';
            setTimeout(() => {
                modalsOverlay.classList.add('show');
            }, 300);
    
    };
    let bookTable = document.getElementById('booking');
    // Відкриття модалки з бронюванням столу
    bookTable.addEventListener('click', openBookModal);

     
    // Ініціалізація логін-попапу при кліці на кнопку входу
    const openLoginModal = () => {
        modalsContent.classList.remove('big');
        modalsContent.classList.remove('mail');
        updateModalContent(`
            <img src=${loginPopUp.image} alt="Person icon gray" class="modals__content-pic">
            <img src=${loginPopUp.close} alt="Close icon" class="modals__content-close" onclick="closeModal()">
            <h2 class="modals__content-title login-title">${loginPopUp.title}</h2>
            <form action="/user-cab" method="POST" class="modals__content-form" id="login-form">
                <input id="loginPhone" type="tel" name="phone" class="modals__content-form-tel tel-ico input" placeholder="Телефон">
                <input id="loginPass" name="password" type="password" class="modals__content-form-pass input" placeholder="Пароль">
                <a href="#" class="modals__content-form-forget">Забули пароль?</a>
                <button type="submit" class="modals__content-form-btn btn">${loginPopUp.btn}</button>
            </form>
            <p class="modals__content-reg">
                ${loginPopUp.additional} <span class="modals__content-reg-link">${loginPopUp.link}</span>
            </p>
        `);
        modals.style.display = 'block';
        setTimeout(() => {
            modalsOverlay.classList.add('show');
        }, 300);
    };
// Переключення між логіном та реєстрацією
    const openSignUpModal = () => {
        modalsContent.classList.remove('big');
        modalsContent.classList.remove('mail');
        updateModalContent(`
            <img src=${signUpPopUp.image} alt="Person icon gray" class="modals__content-pic">
            <img src=${signUpPopUp.close} alt="Close icon" class="modals__content-close" onclick="closeModal()">
            <h2 class="modals__content-title signup-title">${signUpPopUp.title}</h2>
            <form action="/register" method="POST" class="modals__content-form" id="register-form">
                <input id="registerPhone" name="phone" type="tel" class="modals__content-form-tel tel-ico input" placeholder="Телефон">
                <input id="registerPass" name="password" type="password" class="modals__content-form-pass input" placeholder="Пароль">
                <input type="password" class="modals__content-form-pass input mb-10px" placeholder="Підтвердіть пароль">
                <div class="modals__content-form-checkbox">
                    <input type="checkbox" id="check-mail">
                    <label for="check-mail">Хочу отримувати вигідні пропозиції від магазину</label>
                </div>
                <div class="modals__content-form-checkbox mb-18px">
                    <input type="checkbox" id="check-policy" checked required>
                    <label for="check-policy">Приймаю умови<a href=""> Користувацької угоди</a>, <a href="">Політики конфіденційності</a></label>
                </div>
                <button type="submit" class="modals__content-form-btn btn">${signUpPopUp.btn}</button>
            </form>
            <p class="modals__content-log">
                ${signUpPopUp.additional} <span class="modals__content-log-link">${signUpPopUp.link}</span>
            </p>
        `);
    };

    if (navItemBtn) {
        navItemBtn.addEventListener('click', openLoginModal);
    }

     document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('modals__content-reg-link')) {
            openSignUpModal();
        } else if (event.target.classList.contains('modals__content-log-link')) {
            openLoginModal();
        }
    });

    let mailModalButtons = document.getElementsByClassName('swipe__btn');
    if (mailModalButtons) {
        Array.from(mailModalButtons).forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                modalsContent.classList.add('big', 'mail'); // Додаємо стилі для модального вікна
                updateModalContent(`
                    <img src=${sendMail.image} alt="Mail icon" class="modals__content-pic">
                    <img src=${sendMail.close} alt="Close icon" class="modals__content-close" onclick="closeModal()">
                    <h2 class="modals__content-title email-title">${sendMail.title}</h2>
                    <form class="modals__content-form">
                        <input type="email" class="modals__content-form-email email-input input" placeholder="E-mail" required>
                        <button type="submit" class="modals__content-form-btn mt-25 btn">${sendMail.btn}</button>
                    </form>
                `);
                modals.style.display = 'block'; // Відображаємо модалку
                setTimeout(() => {
                    modalsOverlay.classList.add('show');
                }, 200);
            });
        });
    }



    // Закриття модалки при кліку на overlay або кнопку закриття
    modalsOverlay.addEventListener('click', function (event) {
        if (event.target === modalsOverlay || event.target.classList.contains('modals__content-close')) {
            closeModal();
        }
    });

    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/logout', {
                method: "POST"
            });
            window.location.href = '/'; // Перенаправлення на потрібну сторінку
        } catch (e) {
            console.error("Error", error);
       }
    })
});


