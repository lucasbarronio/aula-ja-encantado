import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import pool from './db';

const app: Express = express();
const port: number = 3000

app.use(cors());
app.use(express.json());

app.get('/pessoas', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM pessoas");
    client.release();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Erro"});
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
