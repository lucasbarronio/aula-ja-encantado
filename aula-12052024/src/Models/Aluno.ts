export default class Aluno {

  private _matricula: number = 0;
  private _nome: string = '';
  private _idade: number = 0;
  private _nota1: number = 0;
  private _nota2: number = 0;
  private _nota3: number = 0;

  public get matricula(): number {
    return this._matricula;
  }
  public set matricula(value: number) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }

  private get nota1(): number {
    return this._nota1;
  }
  private set nota1(value: number) {
    this._nota1 = value;
  }

  private get nota2(): number {
    return this._nota2;
  }
  private set nota2(value: number) {
    this._nota2 = value;
  }

  private get nota3(): number {
    return this._nota3;
  }
  private set nota3(value: number) {
    this._nota3 = value;
  }

  constructor(matricula?: number, nome?: string, idade?: number) {
    if (matricula !== undefined) {
      this.matricula = matricula;
    }
    if (nome !== undefined) {
      this.nome = nome;
    }
    if (idade !== undefined) {
      this.idade = idade;
    }
  }

  public definirNotas(value1: number, value2: number, value3: number): void {
    this.nota1 = value1;
    this.nota2 = value2;
    this.nota3 = value3;
  }

  public calculaMedia(): number {
    let notaFinal: number = 0;
    notaFinal = this.nota1 + this.nota2 + this.nota3;
    notaFinal /= 3;
    return notaFinal;
  }

  public imprimeAtributos() {
    console.log(`Matrícula: ${this.matricula}`)
    console.log(`Nome do aluno: ${this.nome}`)
    console.log(`Idade do aluno: ${this.idade}`)
    console.log(`Media final: ${this.calculaMedia()}`)
  }



}