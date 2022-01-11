const Petshop = require('../models/pet');
const product = require('../models/product');
const petshops = require('./peteat.json');
const createRecipients = require('../services/pagarme').createRecipients;

//Database
require('../database');

const addProductsandpets = async () => {
    try{
        for (let petshop of petshops){

            const recipient = await createRecipients(petshop.nome);

            if(!recipient.error){
            const newPetshop = await new Petshop({... petshop, recipient_id: recipient.data.id,}).save();
            await product.insertMany(
            petshop.produtos.map((p) => ({...p, petshop_id: newPetshop._id}))
            );
        }else {
            console.log(recipient.message);
        }
    }
        console.log('End Script'); 
    }
    catch(err) {
        console.log(err.mensage);
    }

};


addProductsandpets();