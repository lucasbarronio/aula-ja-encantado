export default class Fruta {

  private _nome: string = '';
  private _cor: string = '';
  private _tamanho: number = 100;

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get cor(): string {
    return this._cor;
  }
  public set cor(value: string) {
    this._cor = value;
  }

  public get tamanho(): number {
    return this._tamanho;
  }
  public set tamanho(value: number) {
    this._tamanho = value;
  }

  constructor(nome?: string, cor?: string, tamanho?: number) {
    if (nome !== undefined) {
      this.nome = nome;
    }
    if (cor !== undefined) {
      this.cor = cor;
    }
    if (tamanho !== undefined) {
      this.tamanho = tamanho;
    }
  }

  public consumir(value?: number): number {
    if (this.tamanho > 0) {
      this.tamanho -= 20 * (value || 1);
      return this.tamanho;
    }
    return 0;
  }


  public imprimeAtributos() {
    console.log(`Nome popular: ${this.nome}`)
    console.log(`Cor da fruta: ${this.cor}`)
    console.log(`Tamanho: ${this.tamanho}%`)
  }
}