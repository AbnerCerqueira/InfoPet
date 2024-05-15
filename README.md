# Tutorial
1. Entre no terminal, use `git clone https://github.com/AbnerCerqueira/InfoPet.git`, entre na pasta `cd InfoPet/` e execute `npm install`, isso vai fazer com que o npm leia o `package.json` e instale as dependências necessárias para o funcionamento do site.
2. Inicie o servidor MySQL na sua máquina e **crie um arquivo chamado** `.env` dentro da **pasta do projeto**:
![image](https://github.com/AbnerCerqueira/InfoPet/assets/102826252/287fcc66-3c12-44b2-944e-1b8495c32af5) ![image](https://github.com/AbnerCerqueira/InfoPet/assets/102826252/a708f335-8bef-4b1b-a16a-b3f809882b0f) <br>
nele atribua às environment variables os dados de acordo com a configuração do MySQL da sua máquina, exemplo:
```
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = ''
MYSQL_DATABASE = 'infopet'
```
3. As variáveis locais contém as infos necessárias para **conexão com o banco**. A função que faz a conexão vai pegar os dados pelo arquivo .env que você criou. 

4. Execute no banco de dados o script a seguir:
```
CREATE DATABASE infopet;

USE infopet;

CREATE TABLE user(
id INT AUTO_INCREMENT PRIMARY KEY,
login VARCHAR(25) NOT NULL,
senha VARCHAR(30) NOT NULL
);

```
  
5. Inicie o servidor para acessar o site. Você pode usar `node app.js` ou `npm run dev` no terminal. Dentro do `package.json` tem um script que vai rodar quando executar `npm run dev`, ele vai iniciar o servidor com a dependência **nodemon** fazendo com que o servidor reinicie automaticamente quando alterar alguma coisa no código fonte (isso é util na hora de desenvolver). **Se não for alterar nada então simplesmente use** `node app.js` para iniciar o servidor.

6. Agora que tudo está configurado, coloque na url do seu navegador `http://localhost:8080/` e teste o site.
