const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "hostelCRM",
    password: "password",
})

app.listen(3001, () => {
    console.log("Server started on PORT 3001")
})