const fs = require('fs');
const Article = require('../models/article');

class DataLoader {
    async loadInitialData() {
        try {
            const data = await fs.promises.readFile('data.json', 'utf8');
            const articles = JSON.parse(data);
            const docs = await Article.insertMany(articles);
            console.log('Initial data loaded:', docs);
        } catch (err) {
            console.error('Error loading initial data:', err);
        }
    }
}

module.exports =  new DataLoader();
