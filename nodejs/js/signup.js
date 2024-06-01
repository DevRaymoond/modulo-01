const formEl = document.getElementById('sign-up');

formEl.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
});
