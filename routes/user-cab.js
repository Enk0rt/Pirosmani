const { Router } = require('express');
const log = require('../middleware/log-check');
const router = Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.get('/',log, async (req, res) => {
   res.render('user-cab', {
      title: 'Авторизація',
      isAuth: true,
      isUserCab: true
   })
   
})

// Логіка обробки запиту /user-cab 
router.post('/', async (req, res) => {
   try {
      const { phone, password } = req.body
      const candidate = await User.findOne({ phone })
      if (candidate) {
         const areSame = await bcrypt.compare(password,candidate.password)

         if (areSame) {  
            req.session.user = candidate
            req.session.isAuthenticated = true
            req.session.save(err => {
               if (err) {
                  throw err
               } else {
                  res.redirect('/user-cab');
               }
            })
         }else {
            res.redirect('/')
         }
      } else {
         res.redirect('/')
      }
   } catch (e) {
      console.log(e)
   }
  
});

module.exports = router;