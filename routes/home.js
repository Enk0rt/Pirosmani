const { Router } = require('express');
const Product = require('../models/product');
const User = require('../models/user');
const router = Router();

router.get('/', (req, res) => {
   res.render('index', {
      title: "Головна сторінка",
      isHome: true
   });
})


module.exports = router