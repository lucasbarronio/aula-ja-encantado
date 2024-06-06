import promptSync from "prompt-sync";
import Loja from "../Models/Loja";
const promp = promptSync();

export default class LojaController {

  private _lojas: Array<Loja> = [];
  private _id: number = 1;

  public salvar(l: Loja): boolean {
    if (l !== null && this._id !== 0) {
      l.codigo = this._id;
      this._lojas.push(l);
      this._id++;
      return true;
    } else {
      return false;
    }
  }

  public recuperar(codigo: Number): Loja | undefined {
    return this._lojas.find(l => l.codigo === codigo);
  }

  public recuperarTodos() {
    this._lojas.forEach(element => {
      element.imprimeAtributos();
    });
  }

  public editar(l: Loja, novaL: Loja): boolean {
    if (l && novaL) {
      l.nome = novaL.nome;
      l.representante = novaL.representante;
      l.contato = novaL.contato;
      l.cidade = novaL.cidade;
      l.estoque = novaL.estoque;
      return true;
    } else {
      return false;
    }
  }

  public excluir(l: Loja): boolean {
    for (let index = 0; index < this._lojas.length; index++) {
      const element = this._lojas[index];
      if (element.codigo === l.codigo) {
        this._lojas.splice(index, 1);
        return true;
      }
    }
    return false;
  }
}