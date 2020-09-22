let UserModel = require('../models/User');

exports.index = (req, res) => {
  res.render('homepage/index');
}

exports.dashboard = (req,res) => {
  console.log(req.user.email);
  res.render('homepage/dashboard' , { layout: 'dash', user: req.user.email});
}

exports.users = (req,res) => {
  UserModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let users = data;
      // Enviamos los datos a la vista
      res.render('homepage/users', {layout: 'dash',  users: users, user:req.user.email });
    });
} 