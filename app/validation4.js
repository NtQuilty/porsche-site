document.querySelector('.contacts-button').addEventListener('click', (event) => {
    event.preventDefault(); 

    const errorBox = document.querySelector('.error_box');

    // Очищяем бокс с ошибками и скрываем
    if(!errorBox.hasChildNodes()) {
        errorBox.replaceChildren()
        errorBox.style.display = 'none';
    }

    const contactsInput = document.querySelector('.contacts-input');
    if (contactsInput.value = '') {
    } else {
        const elementP = document.createElement('p')
        elementP.className = 'error';
        elementP.innerText = `Поле должно быть обязательно заполнено`;
        errorBox.appendChild(elementP);
    }

    // Устанавливаем видимость блока с ошибками
    if(errorBox.hasChildNodes()) {
        errorBox.style.display = 'block';
    }
    
})

