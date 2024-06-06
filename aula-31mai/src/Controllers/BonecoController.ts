import Boneco from "../Models/Boneco";
import promptSync from "prompt-sync";
const promp = promptSync();

export default class BonecoController {

  private _bonecos: Array<Boneco> = [];
  private _id: number = 1;

  public salvar(boneco: Boneco): boolean {
    if (boneco !== null && this._id !== 0) {
      boneco.codigo = this._id;
      this._bonecos.push(boneco);
      this._id++;
      return true;
    } else {
      return false;
    }
  }

  public editar(b: Boneco, novoB: Boneco): boolean {
    if (b && novoB) {
      b.nome = novoB.nome;
      b.altura = novoB.altura;
      b.peso = novoB.peso;
      b.material = novoB.material;
      b.acessorio = novoB.acessorio;
      b.articulado = novoB.articulado;
      return true;
    } else {
      return false;
    }
  }

  public excluir(b: Boneco): boolean {
    for (let index = 0; index < this._bonecos.length; index++) {
      const element = this._bonecos[index];
      if (element.codigo === b.codigo) {
        this._bonecos.splice(index, 1)
        return true;
      }
    }
    return false;
  }

  public recuperar(codigo: number): Boneco | undefined {
    return this._bonecos.find(boneco => boneco.codigo === codigo)
  }

  public recuperarTodos() {
    this._bonecos.forEach(element => {
      element.imprimeAtributos();
    });
  }
}