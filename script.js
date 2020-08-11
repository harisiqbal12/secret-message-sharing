const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerText = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#message-input');


    if (!input.value == '') {
        const encrypted =  btoa(input.value);
        const output =  document.querySelector('#link-input')
        output.value = `${window.location}#${encrypted}`;
        document.getElementById('link-form').classList.remove('hide');
        document.getElementById('message-form').classList.add('hide');
    
        output.select();
    };
});