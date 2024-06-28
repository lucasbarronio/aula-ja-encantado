const corpoTabela = document.getElementById('corpo_tabela');

async function buscaLivro(livro) {
    const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${livro}`);
    const dados = await response.json();

    const trow = document.createElement('tr');
    corpo_tabela.appendChild(trow);
    const td = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td.textContent = dados.isbn;
    td1.textContent = dados.title;
    td2.textContent = dados.authors.length > 0 ? dados.authors : "Desconhecido";
    td3.textContent = dados.publisher || "Desconhecido";
    td4.textContent = dados.year || "Desconhecido";
    trow.appendChild(td);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    const td5 = document.createElement('td');
    if (dados.cover_url) {
        let imagem = document.createElement('img');
        imagem.setAttribute('src', `${dados.cover_url}`);
        imagem.setAttribute('width', '128px');
        imagem.setAttribute('height', '128px');
        td5.appendChild(imagem);
        trow.appendChild(td5);
    } else {
        td5.textContent = "Não Encontrado"
        trow.appendChild(td5);
    }
}

const botao = document.getElementById('buscar');
const input = document.getElementById('campo');

let livro = "";
botao.addEventListener('click', function () {
    livro = input.value;
    buscaLivro(livro);
    input.value = null;
});