import Bebida from "../Models/Bebida";
import promptSync from "prompt-sync";
const prompt = promptSync();

export default class BebidaController {

    private _bebidas: Array<Bebida> = [];
    private _id: number = 1;

    public salvar(bebida: Bebida): void {
        bebida.codigo = this._id;
        this._bebidas.push(bebida);
        this._id++;
    }

    public recuperarTodos(): void {
        this._bebidas.forEach(element => {
            element.imprimeAtributos();
        });
    }

    public recuperaUm(codigo: number): Bebida | undefined {
        return this._bebidas.find(bebida => bebida.codigo === codigo);
    }


    public excluir(b: Bebida): boolean {
        const element = this.recuperaUm(b.codigo);
        if (element) {
            this._bebidas.splice(element.codigo - 1, 1);
            return true;
        } else {
            return false;
        }
    }

    public editar(b: Bebida): Bebida | undefined {
        const element = this.recuperaUm(b.codigo);
        if (element) {
            let b: Bebida = new Bebida();
            b.codigo = element.codigo;
            b.nome = prompt("Digite o nome da bebida: ");
            b.cor = prompt("Digite a cor da bebida: ");
            b.temperatura = prompt("Digite a temperatura da bebida: ");
            b.teor = prompt("Digite o teor alcoólico da bebida: ");
            b.quantidade = prompt("Digite a quantidade de bebida: ");
            this._bebidas.splice(element.codigo - 1, 1, b);
            return b;
        } else {
            return undefined;
        }
    }
}