const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const propertyRoutes = require('./routes/property.routes')
const favicon = require('express-favicon');


const app = express()
app.use(favicon(path.join(process.cwd(), 'client' , 'assets', 'images', 'rentalhoopfav.ico')))

const CURRENT_WORKING_DIR = process.cwd()



// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())


// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', propertyRoutes)

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

module.exports = app
