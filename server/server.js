const express = require('express')
const cors = require('cors');
const app = express()

require('dotenv').config()

const puerto = process.env.PUERTO
require('./config/mongoose.config')
//middlewares
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true })); // This is new

//routes
require('./routes/gasto.router')(app);
require('./routes/ingreso.router')(app);
require('./routes/auth.routes')(app)

app.listen(puerto, () => {
    console.log("Listening at Port "+ puerto)
});
