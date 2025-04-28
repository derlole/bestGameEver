require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./server/config/db')

const app = express()
const PORT = 5000 || process.env.PORT

connectDB()

app.use('/SERU_TPHEU', express.static('public'));

app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')


app.use('/SERU_TPHEU', require('./server/routes/main'))

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`)
});