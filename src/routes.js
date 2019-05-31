const routes = require('express').Router();

const { User } = require('./app/models');

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Test tdd',
    email: 'email@test.com',
    password_hash: '1234'
  });

  return res.json({ user });
});

module.exports = routes;
