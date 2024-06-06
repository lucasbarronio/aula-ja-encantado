export default class Boneco {

  private _codigo: number = 0;
  private _nome: string = "";
  private _altura: number = 0;
  private _peso: number = 0;
  private _material: string = "";
  private _acessorio: string = "";
  private _articulado: string = "";

  public get codigo(): number {
    return this._codigo;
  }
  public set codigo(value: number) {
    this._codigo = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get altura(): number {
    return this._altura;
  }
  public set altura(value: number) {
    this._altura = value;
  }
  public get peso(): number {
    return this._peso;
  }
  public set peso(value: number) {
    this._peso = value;
  }
  public get material(): string {
    return this._material;
  }
  public set material(value: string) {
    this._material = value;
  }
  public get acessorio(): string {
    return this._acessorio;
  }
  public set acessorio(value: string) {
    this._acessorio = value;
  }
  public get articulado(): string {
    return this._articulado;
  }
  public set articulado(value: string) {
    this._articulado = value;
  }


  constructor(nome?: string, altura?: number, peso?: number, material?: string, acessorio?: string, articulado?: string) {
    if (nome !== undefined) {
      this.nome = nome;
    }
    if (altura !== undefined) {
      this.altura = altura;
    }
    if (peso !== undefined) {
      this.peso = peso;
    }
    if (material !== undefined) {
      this.material = material;
    }
    if (acessorio !== undefined) {
      this.acessorio = acessorio;
    }
    if (articulado !== undefined) {
      this.articulado = articulado;
    }
  }

  public imprimeAtributos(): void {
    console.log(`ID: ${this.codigo}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Altura (cm): ${this.altura}`);
    console.log(`Peso (g): ${this.peso}`);
    console.log(`Material: ${this.material}`);
    console.log(`Acessório: ${this.acessorio}`);
    console.log(`Articulado: ${this.articulado} \n`);
  }

}
