import Bebida from "../Models/Bebida";

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

    public excluir(codigo: number) {
        if (codigo !== null) {
            this._bebidas.splice(codigo, 1);
        }
    }
}