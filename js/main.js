const form = document.getElementById('form');

function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.errorMessage').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorText = document.createElement('p');
        errorText.classList.add('errorMessage');
        errorText.textContent = text;
        parent.classList.add('error');
        parent.append(errorText);
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }

        if (input.dataset.required === 'true') {
            if (input.value == "") {
                console.log('Ошибка: Форма не отправлена');
                createError(input, 'Поле не заполнено');
                result = false;
            }
        }
    }

    return result;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validation(this) === true) {
        alert('OK');
    }
});
