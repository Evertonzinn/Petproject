//AREA SOMENTE DE TESTE PARA FINALIDADES DE PAGAMENTO
const axios = require('axios');

const api = axios.create({
    baseURL: ''// botar o link de direcionamento
});

const api_key = require('../data/i.json').api_key;

module.exports = {
    createRecipients: async (name) => {
        try {
            const response = await api.post('/recipients', //passar o objeto com a requisição, com chave API, dados do banco e mais
             )
             return {error: false, data: response.data}
        } catch (err) { 
            return { error: true, message: err.message };
        }
    },
    createSplitTransaction: async () => {
        try {
            const response = await api.post('/transactions', {
                api_key,
                ... data
            } );
            return { error: false, data: response.data };
        } catch (err) {
             return { error: true, message: err.message}
        }
    }
};