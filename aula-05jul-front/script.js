async function listarBebidas() {
    const response = await fetch(`http://localhost:3000/bebidas`);
    const dados = await response.json();

    const corpo_tabela = document.getElementById('corpo_tabela');

    dados.forEach(item => {
        const trow = document.createElement('tr');
        corpo_tabela.appendChild(trow);
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        td.textContent = item._id;
        td1.textContent = item._nome;
        td2.textContent = item._cor;
        td3.textContent = item._temperatura;
        td4.textContent = item._quantidade;
        td5.textContent = item._teorAlcool;
        trow.appendChild(td);
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
    });
}

listarBebidas();