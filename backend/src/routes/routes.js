const express = require('express');
const Article = require('../models/article');

class Routes {
    constructor() {
        this.router = express.Router();
        this._setupRoutes();
    }

    _setupRoutes() {
        /**
         * @swagger
         * /api/articles:
         *   get:
         *     summary: Obtiene una lista de artículos
         *     responses:
         *       200:
         *         description: Lista de artículos
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 type: object
         *                 properties:
         *                   author:
         *                     type: string
         *                   title:
         *                     type: string
         *                   description:
         *                     type: string
         *                   url:
         *                     type: string
         *                   urlToImage:
         *                     type: string
         *                   publishedAt:
         *                     type: string
         *                     format: date-time
         */
        this.router.get('/articles', async (req, res) => {
            try {
                const articles = await Article.find();
                res.json(articles);
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    }
}

module.exports = new Routes().router;
