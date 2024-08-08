const mongoose = require('mongoose');

var connection = process.env.MONGO_DB_STRING_CONNECTION || "mongodb://localhost:27017/testarticlesdb"
class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        return mongoose.connect(connection)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
            throw err; 
        });
    }
}

module.exports = new Database();
