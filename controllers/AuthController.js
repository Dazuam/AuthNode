let UserModel = require('../models/User');
const { validationResult } = require('express-validator');

exports.login = (req, res) => {
  res.render('auth/login', { layout: 'auth' });
}

exports.register = (req, res) => {
  res.render('auth/register',
  {
    layout: 'auth',
    errors: req.flash('errors')
  });
}

exports.store = (req, res) => {
  // Identifica si hubieron errores en el request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si los hubieron entonces regresa a la petición anterior
    req.flash('errors', errors.array());
    return res.redirect('back');
  }
  UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password })
    .then((data) => {
      return res.send('Usuario registrado con éxito');
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send('Registrar usuario');
}