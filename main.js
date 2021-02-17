let submitButton = null,
    form = null,
    input = null;
window.addEventListener('load', init);
function init() {
    mapInputs();
    preventFormSubmit();
    activateInput();
    log(); //<form>, <button id="submit"
}

function mapInputs() {
    form = document.querySelector('form');
    submitButton = document.getElementById('submit');
    input = document.getElementById('numeroDigitado');
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    input.focus();
    input.addEventListener('keyup', handleInput);

    function handleInput(event) {
        const currentKey = event.key;
        const searchedNumber = event.target.value;
        const hasValue = !!event.target.value && event.target.value.trim() !== '';

        if (!hasValue) {
            clearInput();
            return;
        }

        if (currentKey === 'Enter' && searchedNumber.trim() !== '') {
            console.log(searchedNumber);
            clearInput();
        }
    }

    function clearInput() {
        input.value = '';
        input.focus();
    }
}

function log() {
    console.log('Página carregada com sucesso!');
    console.log(form);
    console.log(submitButton);
    console.log(input);
}
