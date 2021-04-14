const dotenv = require('dotenv')

dotenv.config({path: './.env'})

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
const LocalDB = process.env.MONGO_URI

console.log(LocalDB)


const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: LocalDB,
}

module.exports = config;
