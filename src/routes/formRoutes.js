const express = require('express');
const databaseConnection = require('../../config/database');

const routes = express.Router();


const {
    renderHome,
    getCursos,
    getForm,
    addnewConsulta
} = require('../controllers/controllers')



routes.get("/", renderHome);
routes.get("/contacto", getForm);
routes.get("/cursos", getCursos);


routes.post("/contacto", addnewConsulta);

module.exports = routes