const alunos = [];

function calcularMediaSemestral() {
    const nomeAlunoInput = document.getElementById("nome-aluno");
    const notaFisicaInput = document.getElementById("notaFisica");
    const notaQuimicaInput = document.getElementById("notaQuimica");
    const notaMatematicaInput = document.getElementById("notaMatematica");

    let notaFisica = parseFloat(notaFisicaInput.value);
    let notaQuimica = parseFloat(notaQuimicaInput.value);
    let notaMatematica = parseFloat(notaMatematicaInput.value);

    if (!nomeAlunoInput.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira o nome do aluno!",
        });
        return;
    }

    if (isNaN(notaFisica) || notaFisica < 0 || notaFisica > 10) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira uma nota válida de Física (0 a 10)!",
        });
        return;
    }

    if (isNaN(notaQuimica) || notaQuimica < 0 || notaQuimica > 10) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira uma nota válida de Química (0 a 10)!",
        });
        return;
    }

    if (isNaN(notaMatematica) || notaMatematica < 0 || notaMatematica > 10) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira uma nota válida de Matemática (0 a 10)!",
        });
        return;
    }

    const mediaSemestral = (notaFisica + notaQuimica + notaMatematica) / 3;

    const aluno = {
        nome: nomeAlunoInput.value,
        notaFisica: notaFisica,
        notaQuimica: notaQuimica,
        notaMatematica: notaMatematica,
        mediaSemestral: mediaSemestral
    };

    alunos.push(aluno);

    nomeAlunoInput.value = '';
    notaFisicaInput.value = '';
    notaQuimicaInput.value = '';
    notaMatematicaInput.value = '';

    montaTabela();
}

function montaTabela() {
    const tabelaAlunos = document.getElementById("tabela-alunos");

    const htmlDeAlunos = alunos.map(function (aluno) {
        return `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.notaFisica}</td>
                <td>${aluno.notaQuimica}</td>
                <td>${aluno.notaMatematica}</td>
                <td>${aluno.mediaSemestral.toFixed(2)}</td>
            </tr>
        `;
    }).join("");

    tabelaAlunos.innerHTML = htmlDeAlunos;
}

document.addEventListener('keypress', function(ev) {
    if (ev.key === "Enter") {
        calcularMediaSemestral();
    }
});

document.getElementById("btn-calcular").addEventListener("click", calcularMediaSemestral);
