const form = document.getElementById('form');
function validation(form){

    function removeError(input){
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.errorMessage').remove();
            parent.classList.remove('error');
        }
    }
    function createError(input, text){
        const parent = input.parentNode;
        const errorText = document.createElement('p');
        errorText.classList.add('errorMessage');
        errorText.textContent = text;
        parent.classList.add('error');
        parent.append(errorText);
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs){
        removeError(input);   
        if(input.value == ""){
            console.log('Ошибка Форма не отправленна');
            createError(input, 'Поле не заполненно')
            result = false;
        }
    }
        
    return result;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validation(this) === true){
        alert('OK');
    }
});
