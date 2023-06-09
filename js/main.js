const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(birthday);
});
