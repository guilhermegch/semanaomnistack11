const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/** Rota de Login */
routes.post('/sessions', SessionController.create);

/** Rota para listar os cadastros já feitos */
routes.get('/ongs', OngController.index);
/** Rota para cadastro de ONG's */
routes.post('/ongs', OngController.create);

/** Rota para listar os cadastros de uma ONG */
routes.get('/profile', ProfileController.index);

/** Rota para listar os incidentes já cadastrados */
routes.get('/incidents', IncidentController.index);
/** Rota para cadastro de incidentes */
routes.post('/incidents', IncidentController.create);
/** Rota para apagar os casos */
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
