const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/users', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ user })
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/users', auth, async (req, res) => {
    try {
        User.getAllUsers().then((result) => {
            res.status(200).send(result)
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

router.post('/login', async(req, res, next) => {
    //Login a registered user
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken();
        res.send({ user, token })
    } catch (error) {
        res.status(400).send({ error: 'Invalid login credentials' })
    }

});

router.get('/delete/all', auth, async(req, res) => {
    mongoose.connection.db.dropDatabase();
    res.status(200).send("All data are deleted")
});

module.exports = router;
