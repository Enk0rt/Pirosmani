const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
   res.render('payment', {
      title: "Про оплату",
      isPayment: true
   })
})

module.exports = router