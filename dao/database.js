const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
 
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});
 
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados');
});
 
module.exports = connection;
