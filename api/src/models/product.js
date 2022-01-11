const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    petshop_id: {
        type: Schema.Types.ObjectId,
        ref: 'PetShop',
    },
    Nome: String,
    capa : String,
    preco: Number,
    avaliacao: Number
});


module.exports = mongoose.model('Product', product);