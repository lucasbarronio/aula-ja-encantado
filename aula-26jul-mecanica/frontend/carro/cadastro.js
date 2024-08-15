const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const salvar = document.getElementById('salvar');
const marcaCampo = document.getElementById('marca');
const modeloCampo = document.getElementById('modelo');
const corCampo = document.getElementById('cor');
const categoriaCampo = document.getElementById('categoria');
const dataCampo = document.getElementById('dataFabricacao');
const problemaCampo = document.getElementById('problema');

async function buscarDados() {
    let resultado = await fetch(`http://localhost:3000/carros/${id}`);
    if (resultado.ok) {
        let carro = await resultado.json();
        console.log(carro);
        marcaCampo.value = carro.marca;
        corCampo.value = carro.cor;
        modeloCampo.value = carro.modelo;
        categoriaCampo.value = carro.categoria;
        dataCampo.value = carro.data_fabricacao;
        problemaCampo.value = carro.problema;
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

if (id) {
    buscarDados();
}

async function salvarDados(dados){
    let url = 'http://localhost:3000/carros';
    let metodo = 'POST';
    if (id) { // editando
        url += '/' + id;
        metodo = 'PUT';
    }

    const resultado = await fetch(url, {
        method: metodo,
        body: JSON.stringify(dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    console.log(resultado);

    if (resultado.ok) {
        window.location.href = 'index.html';
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

salvar.addEventListener('click', () => {
    const marca = marcaCampo.value;
    const modelo = modeloCampo.value;
    const cor = corCampo.value;
    const categoria = categoriaCampo.value;
    const dataFabricacao = dataCampo.value;
    const problema = problemaCampo.value;

    const dados = {
        marca: marca,
        modelo: modelo, 
        cor: cor,
        categoria: categoria,
        dataFabricacao: dataFabricacao,
        problema: problema
    }

    salvarDados(dados);
});