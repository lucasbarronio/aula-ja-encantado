export default class Bebida {

    private _codigo: number = 0;
    private _nome: string = "";
    private _cor: string = "";
    private _temperatura: string = "";
    private _teor: string = "";
    private _quantidade: string = "";

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
    public get cor(): string {
        return this._cor;
    }
    public set cor(value: string) {
        this._cor = value;
    }
    public get temperatura(): string {
        return this._temperatura;
    }
    public set temperatura(value: string) {
        this._temperatura = value;
    }
    public get teor(): string {
        return this._teor;
    }
    public set teor(value: string) {
        this._teor = value;
    }
    public get quantidade(): string {
        return this._quantidade;
    }
    public set quantidade(value: string) {
        this._quantidade = value;
    }


    constructor(nome?: string, cor?: string, temperatura?: string, teor?: string, quantidade?: string) {
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (temperatura !== undefined) {
            this.temperatura = temperatura;
        }
        if (teor !== undefined) {
            this.teor = teor;
        }
        if (quantidade !== undefined) {
            this.quantidade = quantidade;
        }
    }

    public imprimeAtributos(): void {
        console.log(`ID: ${this._codigo}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Temperatura: ${this._temperatura}`);
        console.log(`Teor alcoólico: ${this._teor}%`);
        console.log(`Quantidade: ${this._quantidade}L\n`);
    }

}