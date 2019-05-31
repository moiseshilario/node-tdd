const routes = require('express').Router();

const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');

routes.post('/sessions', SessionController.store);

// All routes below this will use authMiddleware
// routes.use(authMiddleware)

routes.get('/dashboard', authMiddleware, (req, res) => res.status(200).send());

module.exports = routes;
