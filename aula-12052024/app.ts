import Aluno from './src/Models/Aluno'
import Cidade from './src/Models/Cidade'
import Fruta from './src/Models/Fruta'

// ^ EXERCICIO 1
// let c: Cidade = new Cidade("Encantado", "Jonas Calvi", "Rio Grande do Sul", 1975, "140.000km", "Encantadense")
// console.log(c);
// c.aumentarPopulacao(500);
// console.log(c.populacao);
// c.diminuirPopulacao(200);
// console.log(c.populacao);
// c.alterarPrefeito("Barack Obama");
// console.log(c);

// ! EXERCICIO 2
// let a: Aluno = new Aluno(11111, "Lucas Barronio", 19);
// a.definirNotas(8, 10, 8);
// a.imprimeAtributos();

// ^ EXERCICIO 3
let f: Fruta = new Fruta("Banana", "Amarelo", 100);
f.imprimeAtributos();
f.consumir();
f.consumir();
f.consumir();
f.imprimeAtributos();

