const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/registry', async(req, res) => {
    const { name, cpf, sexo, idade, nascimento, whatsapp, email } = req.body;

    const id_rash = crypto.randomBytes(4).toString('HEX');
    
    await connection('users').insert({ 
        id_rash, name, cpf, sexo, idade, nascimento, whatsapp, email
     });
    return res.json({ id_rash, name })

});

routes.get('/users', async(req, res) => {
    
    const listUser = await connection('users').select('*')

    return res.json({ listUser })

})

module.exports = routes;