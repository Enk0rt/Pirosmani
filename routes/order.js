const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
   res.render('order', {
      title: "Оформлення замовлення",
      isOrder: true
   })
})

module.exports = router