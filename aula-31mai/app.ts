import Boneco from "./src/Models/Boneco";
import BonecoController from "./src/Controllers/BonecoController";
import promptSync from "prompt-sync";
import Loja from "./src/Models/Loja";
import LojaController from "./src/Controllers/LojaController";
const prompt = promptSync();

let bonecoController: BonecoController = new BonecoController;
let lojaController: LojaController = new LojaController;
let opcao: number = 0;

while (opcao !== 99) {

  console.log(`### Menu ###
    [11] - Salvar boneco
    [12] - Listar todos bonecos
    [13] - Procurar um boneco
    [14] - Editar boneco
    [15] - Excluir boneco
--- --- --- --- --- --- ---
    [21] - Salvar loja
    [22] - Listar todas lojas
    [23] - Procurar uma loja
    [24] - Editar loja
    [25] - Excluir loja
[99] - Sair do sistema\n`);
  opcao = Number(prompt("Digite a opção escolhida: "));

  if (opcao === 11) {

    console.clear();
    let b: Boneco = new Boneco;
    b.nome = prompt("Digite um nome para o boneco: ");
    b.altura = Number(prompt("Digite a altura em cm do boneco: "));
    b.peso = Number(prompt("Digite o peso em gramas do boneco: "));
    b.material = prompt("Digite o material do boneco: ");
    b.acessorio = prompt("Digite um acessorio do boneco: ");
    b.articulado = prompt("Digite se o boneco é articulado: ");
    const bool: boolean = bonecoController.salvar(b);
    if (bool) {
      console.log("\n### Boneco salvo com sucesso. ### \n")
    } else {
      console.log("### Erro ao salvar boneco. ###")
    }

  } else if (opcao === 12) {

    console.clear();
    console.log("\n### Listando todos bonecos cadastrados ###");
    bonecoController.recuperarTodos();
    console.log("### Listagem finalizada ###\n");


  } else if (opcao === 13) {

    console.clear();
    const boneco: Boneco | undefined = bonecoController.recuperar(Number(prompt("Digite o ID do boneco que deseja procurar:")));
    if (boneco) {
      boneco.imprimeAtributos();
    } else {
      console.log(`### Boneco não encontrado. ###`)
    }

  } else if (opcao === 14) {

    console.clear();
    const decoy: Boneco | undefined = bonecoController.recuperar(Number(prompt("Digite o ID do boneco que deseja editar: ")));
    if (decoy) {
      let novoB: Boneco = new Boneco;
      novoB.nome = prompt(`Digite o nome do boneco: ${decoy.nome} `);
      novoB.altura = Number(prompt(`Digite a altura do boneco: ${decoy.altura} `));
      novoB.peso = Number(prompt(`Digite o peso do boneco: ${decoy.peso} `));
      novoB.material = prompt(`Digite o material do boneco: ${decoy.material} `);
      novoB.acessorio = prompt(`Digite o acessório do boneco: ${decoy.acessorio} `);
      novoB.articulado = prompt(`Digite se o boneco é articulado: ${decoy.articulado} `);
      const b: boolean = bonecoController.editar(decoy, novoB);
      if (b) {
        const el: Boneco | undefined = bonecoController.recuperar(decoy.codigo);
        console.log("\n### Imprimindo novos atributos ###")
        el?.imprimeAtributos();
      }
    } else {
      console.log("### Boneco não encontrado. ###")
    }

  } else if (opcao === 15) {

    console.clear();
    const decoy: Boneco | undefined = bonecoController.recuperar(Number(prompt("Digite o ID do boneco que deseja excluir: ")));
    if (decoy) {
      const bool: boolean = bonecoController.excluir(decoy);
      if (bool) {
        console.log("### Boneco excluido com sucesso. ###")
      } else {
        console.log("### Erro ao excluir. ###")
      }
    } else {
      console.log("### Boneco não encontrado. ###")
    }
  } else if (opcao === 21) {

    console.clear();
    let l: Loja = new Loja;
    l.nome = prompt("Digite o nome da loja: ");
    l.contato = prompt("Digite o contato da loja: ");
    l.representante = prompt("Digite o nome do representante: ");
    l.cidade = prompt("Digite a cidade em que está localizada a loja: ");
    l.estoque = Number(prompt("Digite a quantidade de estoque da loja: "));
    const bool: boolean = lojaController.salvar(l);
    if (bool) {
      console.log("\n### Loja salva com sucesso. ### \n")
    } else {
      console.log("### Erro ao salvar loja. ###")
    }

  } else if (opcao === 22) {

    console.clear();
    console.log("\n### Listando todas lojas cadastrados ###");
    lojaController.recuperarTodos();
    console.log("### Listagem finalizada ###\n");

  } else if (opcao === 23) {

    console.clear();
    const loja: Loja | undefined = lojaController.recuperar(Number(prompt("Digite o ID da loja que deseja procurar: ")));
    if (loja) {
      loja.imprimeAtributos();
    } else {
      console.log(`### Loja não encontrada. ###`)
    }

  } else if (opcao === 24) {

    console.clear();
    const decoy: Loja | undefined = lojaController.recuperar(Number(prompt("Digite o ID da loja que deseja editar: ")));
    if (decoy) {
      let novaL: Loja = new Loja;
      novaL.nome = prompt(`Digite o nome da loja: ${decoy.nome} `);
      novaL.contato = prompt(`Digite o contato da loja: ${decoy.contato} `);
      novaL.representante = prompt(`Digite o representante da loja: ${decoy.representante} `);
      novaL.cidade = prompt(`Digite a cidade da loja: ${decoy.cidade} `);
      novaL.estoque = Number(prompt(`Digite a quantidade de estoque: ${decoy.estoque} `));
      const b: boolean = lojaController.editar(decoy, novaL);
      if (b) {
        const el: Loja | undefined = lojaController.recuperar(decoy.codigo)
        console.log("\n### Imprimindo novos atributos ###")
        el?.imprimeAtributos();
      }
    } else {
      console.log("### Loja não encontrada. ###")
    }

  } else if (opcao === 25) {

    console.clear();
    const decoy: Loja | undefined = lojaController.recuperar(Number(prompt("Digite o ID da loja que deseja excluir: ")));
    if (decoy) {
      const bool: boolean = lojaController.excluir(decoy);
      bool === true ? console.log("\n### Loja excluída com sucesso. ###\n") : console.log("### Erro ao excluir loja. ###")
    } else {
      console.log("### Loja não encontrada. ###")
    }
  }

};