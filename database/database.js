const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
 
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'infopet'
})
 
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return
  }
  console.log('Conexão estabelecida com o banco de dados');
})
 
module.exports = connection;
