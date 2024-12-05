const { Router } = require('express')
const router = Router();
const log = require('../middleware/log-check');

router.post('/', log, (req, res) => {
   req.session.destroy(err => {
      if (err) {
         console.error('Помилка при видаленні сесії:', err);
         return res.status(500).send('Помилка при видаленні сесії');
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
      
   });
});
module.exports = router