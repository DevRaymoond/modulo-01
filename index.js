const alunos = []

function calcularMediaSemestral () {
    const nomeAlunoInput = document.getElementById("nome-aluno")
    const notaFisicaInput = document.getElementById("notaFisica")
    const notaQuimicaInput = document.getElementById("notaQuimica")
    const notaMatematicaInput = document.getElementById("notaMatematica")

    let notaFisica = notaFisicaInput.value
    let notaQuimica = notaQuimicaInput.value
    let notaMatematica = notaMatematicaInput.value

    if (!nomeAlunoInput.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira o nome do Aluno!",
        });
        return
    }

    if (!notaFisica || notaFisica <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sem nota de Fisica!",
        });
        return
    }

    if (!notaQuimica || notaQuimica <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sem nota de Quimica!",
        });
        return
    }

    if (!notaMatematica || notaMatematica <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sem nota de Matematica!",
        });
        return
    }



    const mediaSemestral = (Number(notaFisica) + Number(notaQuimica) + Number(notaMatematica)) / 3

    const aluno = {
        nome: nomeAlunoInput.value,
        notaFisica: notaFisica,
        notaQuimica: notaQuimica,
        notaMatematica: notaMatematica,
        mediaSemestral: mediaSemestral
    }

    alunos.push(aluno)

    nomeAlunoInput.value = ''
    notaFisicaInput.value = ''
    notaQuimicaInput.value = ''
    notaMatematicaInput.value = ''

    montaTabela()
}

function montaTabela() {
    const tabelaAlunos = document.getElementById("tabela-alunos")

    const htmlDeAlunos = alunos.map(function (aluno) {
        return `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.notaFisica}</td>
                <td>${aluno.notaQuimica}</td>
                <td>${aluno.notaMatematica}</td>
                <td>${aluno.mediaSemestral.toFixed(2)}</td>
            </tr>
        `
    }).join("")

    tabelaAlunos.innerHTML = htmlDeAlunos
}

document.addEventListener('keypress', function(ev) {
    if (ev.key == "Enter") {
        calcularMediaSemestral()
    }
});

document.getElementById("btn-calcular").addEventListener("click", calcularMediaSemestral)