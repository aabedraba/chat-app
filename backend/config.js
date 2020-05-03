require('dotenv').config();

const config = {
    // Express expose port
    port: process.env.PORT ||  process.env.EXPOSE_PORT,
    
    // Database connection details
    dbUrl: process.env.DB_URL,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
}

module.exports = config;