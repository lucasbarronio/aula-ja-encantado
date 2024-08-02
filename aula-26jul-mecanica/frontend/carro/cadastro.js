const salvar = document.getElementById('salvar');
const marcaCampo = document.getElementById('marca');
const modeloCampo = document.getElementById('modelo');
const corCampo = document.getElementById('cor');
const categoriaCampo = document.getElementById('categoria');
const dataCampo = document.getElementById('dataFabricacao');
const problemaCampo = document.getElementById('problema');

async function salvarDados(dados){
    const resultado = await fetch('http://localhost:3000/carros', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    console.log(resultado);
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

    marcaCampo.value = "";
    modeloCampo.value = "";
    corCampo.value = "";
    categoriaCampo.value = "";
    dataCampo.value = "";
    problemaCampo.value = "";
    console.log(dados.datafabricacao);
});