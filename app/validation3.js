// Валидации формы: Если данные неправильные - кнопка не активна
document.querySelector('.contacts-button').addEventListener('click', (event) => {
    // event.preventDefault(); 

    const contactsInput = document.querySelectorAll('.contacts-input');
    const errorBox = document.querySelector('.error_box');
    const successBox = document.querySelector('.success_box')

    function createElement(innerText) {
        const elementP = document.createElement('p')
        elementP.className = 'error';
        elementP.innerText = innerText;
        errorBox.appendChild(elementP);
    }

    // Очищяем бокс с ошибками и скрываем
    if(errorBox.hasChildNodes()) {
        errorBox.replaceChildren()
        errorBox.style.display = 'none';
    }
    
    // Проверяем заполненность полей с аттрибутом required
    for(let i = 0; i < contactsInput.length; i++) {
        if(contactsInput[i].value === "" && contactsInput[i].hasAttribute('required')) {
            const elementP = document.createElement('p')
            elementP.className = 'error';
            elementP.innerText = `Поле "${contactsInput[i].getAttribute('placeholder')}" должно быть обязательно заполнено`;
            errorBox.appendChild(elementP);
        }
    }

    // Правило для Имени
    let nameValue = document.getElementsByName('name')[0].value;
    let nameRegex = /\d/;
    if (nameRegex.test(nameValue)) {
       createElement('Поле Имя должно содержать только буквы')
    }

    // Проверяем tel
    let telValue = document.getElementsByName('tel')[0].value;
    let phoneRegex = /^(\+7|8)?(\d{10})$/;
    phoneRegex.test(telValue) ?  true : createElement("Номер телефона невалиден!")

    // Проверяем email
    let emailValue = document.getElementsByName('email')[0].value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    !emailPattern.test(emailValue) ? createElement("Некорректный email-адрес") : false

    // Проверяем соответствие веденных значений password
    let passwordValue = document.getElementsByName('password')[0].value;
    let passworConfirmdValue = document.getElementsByName('password_confirm')[0].value;
    function checkingMatch(pass1, pass2) {
        if (passwordValue.length > 6) {
            if(pass1 == pass2) {
                console.log('Пароли совпадают')
            } else {
                createElement('Пароли не сходятся')
            }
        } 

        if (!passwordValue === '') {
            createElement('Пароль меньше 7 знаков')
        }
    }
    checkingMatch(passwordValue, passworConfirmdValue)

    // Устанавливаем видимость блока с ошибками
    if(errorBox.hasChildNodes()) {
        errorBox.style.display = 'block';
    } else {
        successBox.style.display = 'block';
    }
})

