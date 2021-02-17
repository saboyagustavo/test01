let submitButton = null,
    form = null;

window.addEventListener('load', init);
function init() {
    mapInputs();
    log(); //<form>, <button id="submit"
}

function mapInputs() {
    form = document.querySelector('form');
    submitButton = document.getElementById('submit');
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(event.target.value);
    }

    form.addEventListener('submit', handleFormSubmit);
}

function log() {
    console.log('Página carregada com sucesso!');
    console.log(form);
    console.log(submitButton);
}
