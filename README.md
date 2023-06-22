# Desafio Modulo 07 Proyecto 06

## Base Datos
---


### Crear BD y tabla  

```
CREATE DATABASE softjobs;
\c softjobs;
CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );
SELECT * FROM usuarios;
```

## Backend  
---
#### Instalar dependencias

```
$ yarn install
```

#### Iniciar Backend

```
$ npm start
```

#### Abrir Postman, Insomnia

##### http://localhost:3000

## Frontend
---

#### Instalar dependencias

```
$ yarn install
```

#### Iniciar Frontend

```
$ npm run dev
```

#### Abrir navegador

##### http://localhost:3001