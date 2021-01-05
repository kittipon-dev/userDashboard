const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : 'kittipon', // MYSQL PASSWORD
    database : 'user_db' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;