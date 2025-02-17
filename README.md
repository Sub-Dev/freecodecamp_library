# 📚 Biblioteca de Livros

Construção de um aplicativo Full Stack JavaScript para gerenciamento de uma biblioteca de livros, funcionalmente similar a este: [Personal Library](https://personal-library.freecodecamp.rocks/).

## 📌 Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) **Express.js**
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB**
- ![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white) **Chai.js**
- ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white) **Mocha.js**

## 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SeuUsuario/freecodecamp_library
cd freecodecamp_library
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure:

```
PORT=3000
NODE_ENV=test
DB=mongodb+srv://usuario:senha@cluster.mongodb.net/nome_do_banco
```

### 4️⃣ Rodar o servidor

```bash
npm start
```

### 5️⃣ Executar testes

```bash
npm run test
```

## 🛠️ Funcionalidades Implementadas

### ✨ Endpoints da API

- **Adicionar um livro:** `POST /api/books`
- **Buscar todos os livros:** `GET /api/books`
- **Buscar um livro pelo ID:** `GET /api/books/{_id}`
- **Adicionar um comentário a um livro:** `POST /api/books/{_id}`
- **Excluir um livro:** `DELETE /api/books/{_id}`
- **Excluir todos os livros:** `DELETE /api/books`

### ✅ Testes Implementados

- Criar um livro com título
- Criar um livro sem título (erro esperado)
- Buscar todos os livros
- Buscar um livro com ID válido
- Buscar um livro com ID inválido (erro esperado)
- Adicionar um comentário a um livro
- Adicionar um comentário sem o campo necessário (erro esperado)
- Excluir um livro existente
- Excluir um livro inexistente (erro esperado)
- Excluir todos os livros

## 🔗 Links Importantes

- 📂 **Código-Fonte:** [GitHub Repo](https://github.com/Sub-Dev/freecodecamp_library)

---

## 👥 Autor

<table>
 <tr>
 <td alinhar="centro">
 <a href="https://github.com/Sub-Dev" target="_blank">
 <img src="https://avatars.githubusercontent.com/u/68450692?v=4" alt="Anthony-Marin" height="30" width="30"/>
 </a>
 </td>
 <td>
 <strong>Anthony Marin</strong> (Sub-Dev) - <a href="https://github.com/Sub-Dev">Perfil no GitHub</a>
 </td>
 </tr>
</table>
