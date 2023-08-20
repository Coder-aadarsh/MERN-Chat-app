const router = require('express').Router();
const User = require('../models/User');

// creating user
router.post('/', async(req, res)=> {
  try {
    const {name, email, password, picture} = req.body;
    console.log(req.body);
    const user = await User.create({name, email, password, picture});
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})

// login user

router.post('/login', async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})


// // Get all users
// router.get('/', async (req, res) => {
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (e) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Delete user by email
// router.delete('/delete', async (req, res) => {
//     try {
//       const email = req.query.email; // Use query parameter
//       if (!email) {
//         return res.status(400).json({ error: 'Email is required as a query parameter' });
//       }
  
//       const deletedUser = await User.findOneAndDelete({ email });
//       if (!deletedUser) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       res.status(200).json({ message: 'User deleted successfully', deletedUser });
//     } catch (e) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
// });
  
  

module.exports = router