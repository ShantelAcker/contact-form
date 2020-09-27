const button = document.querySelector('#submit');

// placeholder that could be built on top of later
button.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'success.html';
});