const express = require('express');
const router = express.Router();
const petshops = require('../models/pet');
const product = require('../models/product');
const createSplitTransaction = require('../services/pagarme').createSplitTransaction;


router.get('/petshops', async (req, res) => {
    try {
        const petshops = await petshops.find();
        res.json({ error: false, message: 'Hello World'});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

router.get('/petshop/:id', async (req, res) => {
    try {
        const petshop = await petshop.findById(req.params.id);
        let products = await product.find({
            petshop_id: petshop._id
        });
        res.json({ error: false, petshop: {... petshop._doc, products} });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

router.post('/purchase', asyncc (req, res) => {
    try {
        const transactions = await createSplitTransaction(req.body);
        res.json(transactions)
    } catch {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;