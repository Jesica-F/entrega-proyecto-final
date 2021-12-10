const databaseConnection = require('../../config/database');

const renderHome = (req, res) => {
    res.render('pages/index')
};

const getCursos = (req, res) => {

    databaseConnection.query('SELECT * FROM cursos', (error, info) => {
        if (error) {
            console.log(error)
        } else {

            res.render('pages/cursos', {
                data: info
            })
        }
    });

};

const getForm = (req, res) => {
    res.render('pages/contacto');
};


const addnewConsulta = (req, res) => {
    const { nombre, apellido, correo, telefono, curso, comentarios } = req.body;

    databaseConnection.query('INSERT INTO contacto(nombre,apellido,correo,telefono,curso,comentarios)VALUES(?,?,?,?,?,?)', [nombre, apellido, correo, parseInt(telefono), curso, comentarios], (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/contacto')
        }

    });
};

module.exports = {
    renderHome,
    getForm,
    getCursos,
    addnewConsulta
};