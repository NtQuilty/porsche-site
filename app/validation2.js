document.querySelector('.contacts-button').addEventListener('click', (event) => {
    event.preventDefault(); 

    const contactsInput = document.querySelectorAll('.contacts-input');
    let arr = []

    contactsInput.forEach(elem => {
        const attributeName = elem.getAttribute('name')
        arr.push(attributeName)
    })
    console.log(arr)

    for(let i = 0; i < contactsInput.length; i++) {
        
    }

})

// const elementP = document.createElement('p');
// elementP.className = 'error';
// elementP.innerText = `Поле "${contactsInput[i].getAttribute('placeholder')}" должно быть обязательно заполнено`;
// errorBox.appendChild(elementP);