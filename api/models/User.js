const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Service = require('./Service');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: false
    }],
});

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
});

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this;
    return jwt.sign({_id: user._id}, process.env.JWT_KEY)
};

userSchema.statics.getAllUsers = async () => {
    return User.find({});
};

userSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} );
    if (!user) {
        throw new Error({ error: 'Invalid login email credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login password credentials' })
    }
    return user
};

userSchema.methods.addServiceToUser = async function(id_service) {
    const user = this;
    if (!user.services.includes(id_service)) {
        user.widgets.push(id_service);
        await user.save();
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
