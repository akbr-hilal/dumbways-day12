const { Pool } = require("pg");

// const dbPool = new Pool({
//     database: "db_myproject",
//     port: "5432",
//     user: "postgres",
//     password: "kopi",
// });

const isProduction = process.env.NODE_ENV === "production"
let dbPool

if(isProduction){
    dbPool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
} else {
    dbPool = new Pool({
        database: "db_myproject",
        port: "5432",
        user: "postgres",
        password: "kopi",
    });
}

module.exports = dbPool;
