const express = require('express');
const User = require('../models/user');
const {getAllUser,addUser,getUser,deleteUser,updateUser} = require('../controllers/user');
const router = express.Router();

router.get('/all',getAllUser);
router.post('/add',addUser);
router.get('/',getUser);
router.delete('/',deleteUser);
router.patch('/',updateUser);



module.exports = router;