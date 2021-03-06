const express = require('express');
const app = express();
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')
require('dotenv').config();
const router = require('./routes/routes')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()