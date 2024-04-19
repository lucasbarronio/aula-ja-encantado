import Bebida from "./src/Models/Bebida";
import BebidaController from "./src/Controllers/BebidaController";
import promptSync from "prompt-sync";
const prompt = promptSync();

let bebidaController: BebidaController = new BebidaController();

for (let i = 0; i < 5; i++) {
    let b: Bebida = new Bebida();
    b.codigo = i;
    b.nome = prompt("Digite o nome da bebida: ");
    b.cor = prompt("Digite a cor da bebida: ");
    b.temperatura = prompt("Digite a temperatura da bebida: ");
    b.teor = prompt("Digite o teor alcoólico da bebida: ");
    b.quantidade = prompt("Digite a quantidade de bebida: ");
    bebidaController.salvar(b);
}
bebidaController.recuperarTodos();
bebidaController.excluir(Number(prompt("Digite o código da bebida que deseja excluir:")));
bebidaController.recuperarTodos();

