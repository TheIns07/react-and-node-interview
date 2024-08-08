const mongoose = require('mongoose');

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        return mongoose.connect("mongodb://localhost:27017/testarticlesdb")
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
