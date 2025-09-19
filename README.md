# 📄 API REST Fullstack

## **Descrição**
Esta API REST foi construída para gerenciar usuários, categorias, produtos, pedidos e itens. Ela inclui autenticação via **JWT**, segurança de senhas com **bcrypt**, upload de arquivos com **Multer**, e gerenciamento do banco de dados com **Prisma ORM**.  

A aplicação é desenvolvida em **TypeScript** e utiliza **Express** como framework principal.

---

## **Funcionalidades**

- **Usuários**
  - Cadastro de usuários
  - Login com email e senha
  - Autenticação JWT
- **Categorias**
  - Criação, leitura, atualização e exclusão
- **Produtos**
  - CRUD completo
  - Upload de imagens via Multer
- **Pedidos (Orders)**
  - Criação de pedidos
  - Listagem de pedidos por usuário
- **Itens**
  - Associação de produtos a pedidos
- **Segurança**
  - Senhas criptografadas com bcrypt
  - Rotas protegidas com middleware de autenticação JWT

---

## **Tecnologias utilizadas**

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Multer](https://www.npmjs.com/package/multer)
- [CORS](https://www.npmjs.com/package/cors)
- Outros: `dotenv`, `ts-node-dev` para desenvolvimento

## ...


