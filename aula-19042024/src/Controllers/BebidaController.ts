import Bebida from "../Models/Bebida";

export default class BebidaController {

    private _bebidas: Array<Bebida> = [];


    public salvar(bebida: Bebida) : void {
        this._bebidas.push(bebida);
    }

    public recuperarTodos(): void {
        console.log(this._bebidas);
    }
}