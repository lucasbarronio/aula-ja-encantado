import express, { Express, Request, Response } from 'express';
import BebidaController from './src/Controllers/BebidaController';
import Bebida from './src/Models/Bebida';

const app: Express = express();
const port: number = 3000;
let copa: BebidaController = new BebidaController();

app.use(express.json());

app.get('/bebidas', (req: Request, res: Response): Response => {
  const bebidas = copa.listarTodos();
  return res.status(200).json(bebidas);
});

app.get('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    return res.status(200).json(bebida);
  } else {
    return res.status(404).json({ message: 'Bebida não encontrada' })
  }
});

app.delete('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    const excluiu = copa.excluir(bebida);
    if (excluiu) {
      return res.status(200).json({ message: 'Bebida excluída com sucesso.' });
    } else {
      return res.status(500).json({ message: 'Erro ao excluir bebida.' });
    }
  } else {
    return res.status(404).json({ message: 'Bebida não encontrada.' });
  }
})

app.put('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    let novaB: Bebida = new Bebida;
    novaB.cor = req.body.cor;
    novaB.nome = req.body.nome;
    novaB.temperatura = req.body.temperatura;
    novaB.teorAlcool = req.body.teorAlcool;
    novaB.quantidade = req.body.quantidade;
    copa.editar(bebida, novaB);
    return res.status(200).json(novaB);
  } else {
    return res.status(404).json({ message: 'Bebida nao encontrada.' });
  }


})

app.post('/bebidas', (req: Request, res: Response): Response => {
  const bebida: Bebida = new Bebida();
  bebida.cor = req.body.cor;
  bebida.nome = req.body.nome;
  bebida.quantidade = req.body.quantidade;
  bebida.teorAlcool = req.body.teorAlcool;
  bebida.temperatura = req.body.temperatura;
  copa.salvar(bebida);
  return res.status(200).json(bebida);
})

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});