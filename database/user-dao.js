const connection = require('./database');

function getUserByLoginPass(username, senha, callback) {
  connection.query('SELECT id_user, username FROM user WHERE username = ? AND senha = ?', [username, senha], (error, results, fields) => {
    if (error) {
      callback(error, null)
      return
    }
    callback(null, results)
  })
}

function addUser(user, callback) {
  connection.query('INSERT INTO user SET ?', user, (error, results, fields) => {
    if (error) {
      callback(error, null)
      return
    }
    callback(null, results.insertId)
  })
}

function updateUser(dados, id, callback) {
  const sql = "UPDATE user SET ? WHERE id_user = ?"
  connection.query(sql, [dados, id], (err, result) => {
    if (err) {
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

function addPet(dados, callback) {
  const sql = "INSERT INTO pet SET ?"
  connection.query(sql, dados, (err, result) => {
    if (err) {
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

function getPet(id, callback) {
  const sql = `
    SELECT * FROM pet p
    INNER JOIN user u ON (u.id_user = p.id_user)
    WHERE u.id_user = ?;
  `
  connection.query(sql, id, (err, result) => {
    if (err) {
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

function deletePet(id, callback) {
  const sql = "DELETE FROM pet WHERE id_pet = ?"
  connection.query(sql, id, (err, result) => {
    if (err) {
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

module.exports = {
  getUserByLoginPass,
  addUser,
  updateUser,
  addPet,
  getPet,
  deletePet
}