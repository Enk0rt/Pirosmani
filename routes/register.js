const { Router } = require('express');
const User = require('../models/user')
const router = Router();
const bcrypyt = require('bcryptjs')

router.post('/', async (req, res)=>{
   try {
      const { phone, password } = req.body
      const candidate = await User.findOne({ phone })
      
      if (candidate) {
         res.redirect('/')
      } else {
         const hashPassword = await bcrypyt.hash(password,10)
         const user = User({
            phone,password:hashPassword,cart:{items:[]}
         })
         await user.save()
         res.redirect('/')
      }
   } catch (e) {
      console.log(e)
   }
})

module.exports = router