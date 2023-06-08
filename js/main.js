const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();


validate();
});


function validate(){
    // Получение значений полей для клиента (физическое лицо)
let fioFizCace = document.getElementById("fioFizCace").value.trim();
let fioFizInn = document.getElementById("fioFizInn").value.trim();
let fioFizDataOfBirth = document.getElementById("fioFizDataOfBirth").value.trim();
let fioFizSeris = document.getElementById("fioFizSeris").value.trim();
let fioFizNumber = document.getElementById("fioFizNumber").value.trim();
let fioFizPassport = document.getElementById("fioFizPassport").value.trim();

// Получение значений полей для клиента (юридическое лицо)
let fioenttityCace = document.getElementById("fioenttityCace").value.trim();
let fioenttityInn = document.getElementById("fioenttityInn").value.trim();

// Получение значений полей для организации
let nameCompany = document.getElementById("nameCompany").value.trim();
let addresСompany = document.getElementById("addresСompany").value.trim();
let ogrncompany = document.getElementById("Ogrncompany").value.trim();
let innCompany = document.getElementById("innCompany").value.trim();
let kpCompany = document.getElementById("kpCompany").value.trim();

// Получение значений полей для продукта (кредит)
let dateOpen = document.getElementById("dateOpen").value.trim();
let dateClose = document.getElementById("dateClose").value.trim();
let creditSrock = document.getElementById("creditSrock").value.trim();
let innuitivnay = document.getElementById("innuitivnay").checked;
let diffiricionay = document.getElementById("diffiricionay").checked;
let number = document.getElementById("number").value.trim();

// Получение значений полей для продукта (вклад)
let dateOpenVklad = document.getElementById("dateOpenVklad").value.trim();
let dateCloseVklad = document.getElementById("datecСloseVklad").value.trim();
let srockVklad = document.getElementById("srockVklad").value.trim();
let stavka = document.getElementById("stavka").value.trim();

if (fioFizCace === '') {
    
}
}