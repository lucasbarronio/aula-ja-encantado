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
        console.log(this._bebidas);
    }

    public recuperaUm(codigo: number): void {
        if (codigo !== null) {
            for (let index = 0; index < this._bebidas.length; index++) {
                if (codigo == this._bebidas[index].codigo) {
                    console.log(this._bebidas[index]);
                }

            }
        }
    }

    public excluir(codigo: number) {
        if (codigo !== null) {
            this._bebidas.splice((codigo - 1), 1);
        }
    }


    public editar(codigo: number) {
        if (codigo !== null) {
            for (let index = 0; index < this._bebidas.length; index++) {
                if (codigo == this._bebidas[index].codigo) {
                    this._bebidas[index].nome = prompt("Digite o novo nome: ")
                    this._bebidas[index].cor = prompt("Digite a nova cor: ")
                    this._bebidas[index].temperatura = prompt("Digite a nova temperatura: ")
                    this._bebidas[index].teor = prompt("Digite o novo teor: ")
                    this._bebidas[index].quantidade = prompt("Digite a nova quantidade: ")
                }
            }
        }
    }
}