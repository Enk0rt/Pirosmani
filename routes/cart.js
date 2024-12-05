const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
   res.render('cart', {
      title: "Кошик",
      isCart: true
   });
})

module.exports = router