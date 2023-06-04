const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const fioFizCace = myForm.elements.fioFizCace.value.trim();
    const fioFizCaceError = (document.querySelector('#fioFizCace + .errorMessage'));
    const InputfioFizCace = (document.getElementById('fioFizCace'));
    
    if( fioFizCace === ''){
        fioFizCaceError.textContent = 'Заполните ФИО';
        InputfioFizCace.parentNode.classList.add('error');
        InputfioFizCace.parentNode.classList.remove('success');
    }
    else{
        fioFizCaceError.textContent = '';
        InputfioFizCace.parentNode.classList.add('success');
        InputfioFizCace.parentNode.classList.remove('error');

    }

});ЗЗ