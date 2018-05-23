var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', (req, res) => {
  const data = {
    msg: 'Aqui va el usuario', 
    nombre: 'Gaby',
    apellido: 'Quintana',
    trabajo:'developer'  };
  res.status(200).json(data).end();
});

module.exports = router;
