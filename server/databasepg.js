const {Client} = require('pg')
require('dotenv').config();

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'hostelCRM'
})

client.connect()


client.query(`SELECT * FROM rooms`, (err, res) => {
    if(!err) {
        console.log('rows: ', res.rows)
    } else {
        console.log(err.message)
    }

    client.end()
})