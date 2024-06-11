const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const {
    userSignup,
    userLogin,
    userLogout,
    updateUser
}=require('../controllers/auth.js')

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post('/logout', auth, userLogout);
router.put('/update', auth, updateUser);
router.get('/user', auth, (req, res)=>{
    res.json(req.user);
});

router.get('/all',auth, (req, res)=>{
    res.json("Hello World!");
});


module.exports = router;