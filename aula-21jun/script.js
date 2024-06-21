// const dados = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }]

const corpo_tabela = document.getElementById('corpo_tabela');

async function main() {
    const response = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
    const dados = await response.json();

    dados.forEach(element => {
        const trow = document.createElement('tr');
        corpo_tabela.appendChild(trow);
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td.textContent = element.id;
        td1.textContent = element.nome;
        td2.textContent = element.sigla;
        td3.textContent = element.regiao.nome;
        trow.appendChild(td);
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
    });
}

main();

