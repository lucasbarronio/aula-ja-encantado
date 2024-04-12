export default class Cidade {

  private _nome: string = '';
  private _prefeito: string = '';
  private _estado: string = '';
  private _populacao: number = 0;
  private _extensao: number = 0;
  private _gentilico: string = '';

  constructor(nome?: string, prefeito?: string, estado?: string, populacao?: number, extensao?: number, gentilico?: string) {
    if (nome !== undefined) {
      this.nome = nome;
    }
    if (prefeito !== undefined) {
      this.prefeito = prefeito;
    }
    if (estado !== undefined) {
      this.estado = estado;
    }
    if (populacao !== undefined) {
      this.populacao = populacao;
    }
    if (extensao !== undefined) {
      this.extensao = extensao;
    }
    if (gentilico !== undefined) {
      this.gentilico = gentilico;
    }
  }


  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get prefeito(): string {
    return this._prefeito;
  }
  public set prefeito(value: string) {
    this._prefeito = value;
  }

  public get estado(): string {
    return this._estado;
  }
  public set estado(value: string) {
    this._estado = value;
  }

  public get populacao(): number {
    return this._populacao;
  }
  public set populacao(value: number) {
    this._populacao = value;
  }

  public get extensao(): number {
    return this._extensao;
  }
  public set extensao(value: number) {
    this._extensao = value;
  }

  public get gentilico(): string {
    return this._gentilico;
  }
  public set gentilico(value: string) {
    this._gentilico = value;
  }

  public aumentarPopulacao(value: number): void {
    this.populacao += value;
  }
  public diminuirPopulacao(value: number): void {
    this.populacao -= value;
  }

  public alterarPrefeito(value: string): string {
    this.prefeito = value;
    return value;
  }

  public imprimeAtributos() {
    console.log(`Nome: ${this.nome}`)
    console.log(`Prefeito: ${this.prefeito}`)
    console.log(`Estado: ${this.estado}`)
    console.log(`População: ${this.populacao}`)
    console.log(`Extensão: ${this.extensao}km`)
    console.log(`Gentílico: ${this.gentilico}`)
  }
}