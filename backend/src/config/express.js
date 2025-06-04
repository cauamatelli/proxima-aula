const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureExpress = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());

    //rotas
    app.use('/api', require('../routes'));

    return app;

};

module.exports = configureExpress