const form = document.getElementById('sign-up-form');
const input = form.querySelector('input');
const subBtn = document.getElementById('subBtn');
const closeModalBtn = document.querySelector('.btn-close');
const error = document.getElementById('name-error');

const validateEmail = (email) => {  // Generates error messages

    if (email === '') {
        return 'Email is required.';
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isValid.test(email)) {
        return 'Valid email required';
    }

    return '';

};

input.addEventListener('input', (e) => {

    const email = e.target.value.trim();

    const errorMsg = validateEmail(email);
    error.innerHTML = errorMsg; // Update error message

    if (errorMsg !== '') {
        input.classList.add('error');
        subBtn.classList.remove('active'); // Disable button
        return;
    }

    input.classList.remove('error'); // Remove error class
    
    subBtn.classList.add('active'); // Enable button

});

function openModal(email){
    // Show modal

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const userEmailSpan = document.querySelector('.user-email');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    userEmailSpan.innerHTML = email;
}

function closeModal(){
    // Hide modal
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const userEmailSpan = document.querySelector('.user-email');


    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    userEmailSpan.innerHTML = '';
}

subBtn.addEventListener('click', (e) => {

    e.preventDefault();

    const email = input.value.trim();
    const errorMsg = validateEmail(email);

    if (errorMsg !== '') {
        error.innerHTML = errorMsg;
        input.classList.add('error');
        return;
    }

    console.log('Form is sent with email:', email);

    openModal(email);

});

closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});
