const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const regex = /^[0-9]*$/;
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

    const fioFizInn = myForm.elements.fioFizInn.value.trim();
    const fioFizInnError = (document.querySelector('#fioFizInn + .errorMessage'));
    const InputfioFizInn = (document.getElementById('fioFizInn'));

    if(fioFizInn === ''){
        fioFizInnError.textContent = 'Заполните ИНН';
        InputfioFizInn.parentNode.classList.add('error');
        InputfioFizInn.parentNode.classList.add('success');

    }
    else if(!regex.test(fioFizInn)){
        fioFizInnError.textContent = 'Заполните корректноы';
        InputfioFizInn.parentNode.classList.add('error');
        InputfioFizInn.parentNode.classList.add('success');
    }
    else{
        fioFizInnError.textContent = '';
        InputfioFizInn.parentNode.classList.add('error');
        InputfioFizInn.parentNode.classList.add('success');
    }

    const fioenttityCace = myForm.elements.fioenttityCace.value.trim();
    const fioenttityCaceError = (document.querySelector('#fioenttityCace + .errorMessage'));
    const InputfioenttityCace = (document.getElementById('fioenttityCace'));

    if(fioenttityCace === ''){
      fioenttityCaceError.textContent = 'Заполните имя';
      InputfioenttityCace.parentNode.classList.add('error');
      InputfioenttityCace.parentNode.classList.add('success');
    }
    else{
      fioenttityCaceError.textContent = '';
      InputfioenttityCace.parentNode.classList.add('error');
      InputfioenttityCace.parentNode.classList.add('success');
    }
     const fioenttityInn = myForm.elements.fioenttityInn.value.trim();
     const fioenttityInnError = document.querySelector('#fioenttityInn + .errorMessage');
     const InputfioenttityInn = document.getElementById('fioenttityInn');

     if(fioenttityInn === ''){
      fioenttityInnError.textContent = 'Ввидите ИНН юр-лица';
      InputfioenttityInn.parentNode.classList.add('error');
      InputfioenttityInn.parentNode.classList.add('success');
     }
     else{
      fioenttityInnError.textContent = '';
      InputfioenttityInn.parentNode.classList.add('error');
      InputfioenttityInn.parentNode.classList.add('success');
     }

     const nameCompany = myForm.elements.nameCompany.value.trim();
     const nameCompanyError = document.querySelector('#nameCompany + .errorMessage');
     const InputnameCompany = document.getElementById('nameCompany');

     if (nameCompany === ''){
      nameCompanyError.textContent = 'ВВидите название компании';
      InputnameCompany.parentNode.classList.add('error');
      InputnameCompany.parentNode.classList.add('success');
     }
     else{
      InputnameCompany.parentNode.classList.add('error');
      InputnameCompany.parentNode.classList.add('success');
     }

});