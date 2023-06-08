function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value, type } = element;
      
      if (type === 'text') {
        if (value.trim() === '') {
          const errorMessage = formNode.querySelector(`#${name} + .errorMessage`);
          errorMessage.textContent = 'Поле обязательно для заполнения';
          element.classList.add('error');
          
        }
      }
      
      if (type === 'number') {
        if (!validateNumber(value)) {
          const errorMessage = formNode.querySelector(`#${name} ~ .errorMessage`);
          errorMessage.textContent = 'Некорректное значение';
          element.classList.add('error');
        }
      }
      
      return { name, value, type };
    });

  console.log(data);
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

function validateNumber(number) {
  const numberRegex = /^\d+$/;
  return numberRegex.test(number);
}

const applicantForm = document.getElementById('form');
applicantForm.addEventListener('submit', handleFormSubmit);
