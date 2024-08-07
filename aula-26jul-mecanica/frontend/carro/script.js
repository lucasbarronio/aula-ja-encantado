async function listarCarros() {
    const response = await fetch(`http://localhost:3000/carros`);
    const dados = await response.json();
    const corpoTabela = document.getElementById('corpo-tabela');
    
    dados.forEach(item => {
        const linha = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = item.id;
        linha.appendChild(tdId);

        const tdMarca = document.createElement('td');
        tdMarca.textContent = item.marca;
        linha.appendChild(tdMarca);
        
        const tdModelo = document.createElement('td');
        tdModelo.textContent = item.modelo;
        linha.appendChild(tdModelo);
        
        const tdCor = document.createElement('td');
        tdCor.textContent = item.cor;
        linha.appendChild(tdCor);
        
        const tdCategoria = document.createElement('td');
        tdCategoria.textContent = item.categoria;
        linha.appendChild(tdCategoria);
        
        const tdDataFabricacao = document.createElement('td');
        tdDataFabricacao.textContent = item.dataFabricacao;
        linha.appendChild(tdDataFabricacao);

        const tdProblema = document.createElement('td');
        tdProblema.textContent = item.problema;
        linha.appendChild(tdProblema);

        corpoTabela.appendChild(linha);

    });
}

listarCarros();