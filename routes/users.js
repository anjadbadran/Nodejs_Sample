// const express = require('express');
// const router = express.Router();

// let users = [
//     { id: 1, name: 'Anjad' },
//     { id: 3, name: 'Osaid' },
//     { id: 2, name: 'Hamza' },
//     { id: 3, name: 'Tala' }
// ];

// //Create New User
// router.post('/', (req, res) => {
//     const { id, name } = req.body;


//     if (!id || !name)
//         return res.status(400).json({ message: 'id and name are required' });


//     const checkUserExist = users.find(u => u.id === parseInt(id));
//     if (checkUserExist)
//         return res.status(409).json({ message: 'User with this ID already exists' });


//     const newUser = { id: parseInt(id), name };
//     users.push(newUser);

//     res.status(201).json(newUser);
// });

// //Get All Users
// router.get('/', (req, res) => {
//     res.json(users);
// });


// // Get user by id
// router.get('/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user)
//         return res.status(404).json({ msg: 'User Not Found' });

//     res.json(user);
// });


// //Update User Name
// router.put('/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user)
//         res.status(404).json({ msg: 'User Not Found' });

//     user.name = req.body.name;
//     res.json(users);

// });


// router.delete('/:id', (req, res) => {
//     const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
//     if (userIndex == -1)
//         res.status(404).json({ msg: 'USer already doesn\'t exit!' });

//     const deletedUser = users.splice(userIndex, 1);
//     res.json(deletedUser[0]);
// });






// module.exports = router;