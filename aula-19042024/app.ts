import Bebida from "./src/Models/Bebida";
import BebidaController from "./src/Controllers/BebidaController";
import promptSync from "prompt-sync";
const prompt = promptSync();

let bebidaController: BebidaController = new BebidaController();
let opcao: number = 0;

while (opcao != 99) {

    console.log(`## Menu ##
    [1] - Salvar bebida
    [2] - Listar todas bebidas
    [3] - Procurar uma bebida
    [4] - Editar bebida
    [5] - Excluir bebida
    [99] - Sair do sistema`);
    opcao = Number(prompt("Digite a opção escolhida: "));

    if (opcao === 1) {
        console.clear();
        let b: Bebida = new Bebida();
        b.nome = prompt("Digite o nome da bebida: ");
        b.cor = prompt("Digite a cor da bebida: ");
        b.temperatura = prompt("Digite a temperatura da bebida: ");
        b.teor = prompt("Digite o teor alcoólico da bebida: ");
        b.quantidade = prompt("Digite a quantidade de bebida: ");
        bebidaController.salvar(b);
    } else if (opcao === 2) {
        console.clear();
        console.log("### Imprimindo todas bebidas ###")
        bebidaController.recuperarTodos();
        console.log("### Impressão finalizada ###")
    } else if (opcao === 3) {
        console.clear();
        const bebida: Bebida | undefined = bebidaController.recuperaUm(Number(prompt("Digite um ID: ")))
        if (bebida) {
            bebida.imprimeAtributos();
        } else {
            console.log("Bebida não encontrada.");
        }
    } else if (opcao === 4) {
        console.clear();
        const bebida: Bebida | undefined = bebidaController.recuperaUm(Number(prompt("Digite um ID para editar: ")));
        if (bebida) {
            const resultado: Bebida | undefined = bebidaController.editar(bebida);
            if (resultado) {
                console.log("Imprimindo novos valores da bebida...");
                resultado.imprimeAtributos();
            } else {
                console.log("Bebida nao encontrada");
            }
        } else {
            console.log("Bebida nao encontrada.")
        }
    } else if (opcao === 5) {
        console.clear();
        const bebida: Bebida | undefined = bebidaController.recuperaUm(Number(prompt("Digite um ID para excluir: ")));
        if (bebida) {
            const resultado: boolean = bebidaController.excluir(bebida);
            if (resultado === true) {
                console.log("Bebida excluída com sucesso.")
            } else {
                console.log("Erro ao tentar excluir bebida.")
            }
        } else {
            console.log("Bebida não encontrada.")
        }
    } else if (opcao !== 99) {
        console.log("Opção inválida. \nTente novamente.")
    }
}