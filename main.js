document.getElementById('form-numeros').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 > num1) {
        alert('Sucesso: O campo B é maior que o campo A.');
    } else {
        alert('Erro: O campo B deve ser maior que o campo A.');
    }
});