// Валидации формы: Если данные неправильные - кнопка не активна
document.querySelector('.contacts-button').addEventListener('click', (event) => {
    event.preventDefault(); 

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
    
    //Проверяем заполненность полей с аттрибутом required
    for(let i = 0; i < contactsInput.length; i++) {
        if(contactsInput[i].value === "") {
            if (contactsInput[i].hasAttribute('required')) {
                const elementP = document.createElement('p')
                elementP.className = 'error';
                elementP.innerText = `The field "${contactsInput[i].getAttribute('placeholder')}" must be filled in`;
                errorBox.appendChild(elementP);
            }
        } else {
            if(contactsInput[i].attributes[0].value === 'name') {
                let nameValue = contactsInput[i].value
                let nameRegex = /\d/;
                nameRegex.test(nameValue) ? createElement('The "Name" field must contain only letters') : false
            }

            if(contactsInput[i].attributes[0].value === 'tel') {
                let telValue = contactsInput[i].value
                let phoneRegex = /^(\+7|8)?(\d{10})$/;
                !phoneRegex.test(telValue) ?  createElement('Invalid phone number') : false
            }

            if(contactsInput[i].attributes[0].value === 'email') {
                let emailValue = contactsInput[i].value;
                let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                !emailPattern.test(emailValue) ? createElement('Invalid email address') : false
            }

            if(contactsInput[i].attributes[0].value === 'password') {
                let passwordValue = contactsInput[i].value;
                let passworConfirmdValue = document.getElementsByName('password_confirm')[0].value;
                function checkingMatch(pass1, pass2) {
                    if (pass1.length < 7) {
                        createElement('The password is less than 7 digits')
                    } else {
                        if(pass1 !== pass2) {
                            createElement('Passwords must match')
                        }
                    }
                }
                checkingMatch(passwordValue, passworConfirmdValue)
            }
        }
    }

    // Устанавливаем видимость блока с ошибками
    if(errorBox.hasChildNodes()) {
        errorBox.style.display = 'block';
        successBox.style.display = 'none';
    } else {
        successBox.style.display = 'block';
    }
    
})

