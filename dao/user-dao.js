const connection = require('./database');
 
function getAllUsers(callback) {
  connection.query('SELECT * FROM user', (error, results, fields) => {
    if (error) {
      callback(error, null)
      return
    }
    callback(null, results)
  })
}
 
function getUserById(id, callback) {
  connection.query('SELECT * FROM user WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null)
      return
    }
    callback(null, results[0])
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
 
function updateUser(id, user, callback) {
  connection.query('UPDATE user SET ? WHERE id = ?', [user, id], (error, results, fields) => {
    if (error) {
      callback(error, null)
      return  
    }
    callback(null, results.affectedRows)
  })
}
 
function deleteUser(id, callback) {
  connection.query('DELETE FROM user WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null)
      return  
    }
    callback(null, results.affectedRows)
  })
}
 
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
}