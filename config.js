require('dotenv').config();

const config = {
    // Express expose port
    port: process.env.EXPOSE_PORT,
    
    // Database connection details
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}

module.exports = config;