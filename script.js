const form = document.querySelector('.trybewarts-login');
const emailInput = document.querySelector('.email');
const senhaInput = document.querySelector('.senha');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
    const email = emailInput.value;
    const senha = senhaInput.value;
    
    if (email === 'tryber@teste.com' && senha === '123456'){
        window.alert('Olá, Tryber!')
    } else{
        window.alert('Email ou senha inválidos.')
    }
});