document.getElementById('btn-trocar').addEventListener('click', function() {

    const valorAInput = document.getElementById('valorA');
    const valorBInput = document.getElementById('valorB');
    
    let valorA = valorAInput.value;
    let valorB = valorBInput.value;

    if (!valorA || !valorB) {
        alert('Por favor, insira valores em ambos os campos.');
        return;
    }

    // Trocando os valores
    [valorA, valorB] = [valorB, valorA];

    // Atualizando os inputs com os novos valores
    valorAInput.value = valorA;
    valorBInput.value = valorB;

    // Exibindo o resultado da troca
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <strong>Valores trocados:</strong><br>
        A = ${valorA} (anteriormente B)<br>
        B = ${valorB} (anteriormente A)
    `;
});
