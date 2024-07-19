# **Referencias**
``` https://www.npmjs.com/package/pg?activeTab=readme ``` <br>
``` https://github.com/brianc/node-postgres/tree/master/packages/pg-pool ```

# **Como instalar**

Abrir um terminal e digitar
```
npm install
```

# **Create Table dos testes**
```
CREATE TABLE pessoas (
	codigo int PRIMARY KEY,
	nome varchar(255) NOT NULL 
)

INSERT INTO pessoas (codigo, nome)
VALUES (1, 'Lucas');

INSERT INTO pessoas (codigo, nome)
VALUES (2, 'Mateus');

INSERT INTO pessoas (codigo, nome)
VALUES (3, 'Donald Trump');

INSERT INTO pessoas (codigo, nome)
VALUES (4, 'Kanye West');
```

# **db.ts**
```
    user: process.env.PGUSER || 'USERUSERUSER',
    host: process.env.PGHOST || 'HOSTHOSTHOST',
    database: process.env.PGDATABASE || 'DATABASEDATABASEDATABASE',
    password: process.env.PGPASSWORD || 'PASSWORDPASSWORDPASSWORD',
    port: Number(process.env.PGPORT) || 5432
```

# **Como executar**

Abrir um terminal e digitar
```
npm run dev
```

## Usando um cliente API

```
http://localhost:3000/pessoas
```