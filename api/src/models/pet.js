const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petshop = new Schema({
    Nome: String,
    logo: String,
    categoria: String,
    desatque: Number,
    location: Object,
    recipient_id: String
});


module.exports = mongoose.model('PetShop', petshop);