function buscaCep() {
    const cep = document.getElementById("cep").value.trim()

    if (!cep) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cep informado está inválido",
        })
        return
    }

    document.getElementById("resultado").innerHTML = "CARREGANDO ..."
    
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(function (response) {
            console.log("PRIMEIRA RESPOSTA")
            console.log(response)

            return response.json()
        })
        .then(function(resposta) {
            console.log("SEGUNDA RESPOSTA")
            console.log(resposta)


            document.getElementById("tabela-ceps").innerHTML = 
                `<tr>
                    <td>${cep.logradouro}</td>
                    <td>${cep.bairro}</td>
                    <td>${cep.localidade}</td>
                    <td>${cep.uf}</td>
                    <td>${cep.ddd}</td>
                </tr>`
        })
}

document.getElementById('btn-busca-cep').addEventListener('click', buscaCep)