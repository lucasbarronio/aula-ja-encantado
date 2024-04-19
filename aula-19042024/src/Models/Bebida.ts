export default class Bebida {

    private _nome: string = "";
    private _cor: string = "";
    private _temperatura: string = "";
    private _teor: string = "";
    private _quantidade: string = "";

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

}