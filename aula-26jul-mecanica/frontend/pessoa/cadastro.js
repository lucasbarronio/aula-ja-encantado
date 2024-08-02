const salvar = document.getElementById('salvar');
const nomeCampo = document.getElementById('nome');
const enderecoCampo = document.getElementById('endereco');
const cpfCampo = document.getElementById('cpf');
const emailCampo = document.getElementById('email');
const generoCampo = document.getElementById('genero');

async function salvarDados(dados){
    const resultado = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    console.log(resultado);
}

salvar.addEventListener('click', () => {
    const nome = nomeCampo.value;
    const endereco = enderecoCampo.value;
    const cpf = cpfCampo.value;
    const email = emailCampo.value;
    const genero = generoCampo.value;

    const dados = {
        nome: nome,
        endereco: endereco, 
        cpf: cpf,
        email: email,
        genero: genero
    }

    salvarDados(dados);

    nomeCampo.value = "";
    enderecoCampo.value = "";
    cpfCampo.value = "";
    emailCampo.value = "";
    generoCampo.value = "";
});