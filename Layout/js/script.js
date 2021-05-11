var popup = document.getElementById("popup");
var close = document.getElementById("close");
var form = document.getElementById("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    popup.classList.add('show');
    form.reset();
});
close.addEventListener('click', () => {
    popup.classList.remove('show');
});