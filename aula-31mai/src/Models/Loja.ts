export default class Loja {

  private _codigo: number = 0;
  private _nome: string = "";
  private _contato: string = "";
  private _representante: string = "";
  private _cidade: string = "";
  private _estoque: number = 0;

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
  public get contato(): string {
    return this._contato;
  }
  public set contato(value: string) {
    this._contato = value;
  }
  public get representante(): string {
    return this._representante;
  }
  public set representante(value: string) {
    this._representante = value;
  }
  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }
  public get estoque(): number {
    return this._estoque;
  }
  public set estoque(value: number) {
    this._estoque = value;
  }


  constructor(nome?: string, contato?: string, representante?: string, cidade?: string, estoque?: number) {
    if (nome !== undefined) {
      this.nome = nome;
    }
    if (contato !== undefined) {
      this.contato = contato;
    }
    if (representante !== undefined) {
      this.representante = representante;
    }
    if (cidade !== undefined) {
      this.cidade = cidade;
    }
    if (estoque !== undefined) {
      this.estoque = estoque;
    }
  }

  public imprimeAtributos(): void {
    console.log(`ID: ${this.codigo}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Contato: ${this.contato}`);
    console.log(`Representante: ${this.representante}`);
    console.log(`Cidade: ${this.cidade}`);
    console.log(`Estoque: ${this.estoque}\n`);
  }
}