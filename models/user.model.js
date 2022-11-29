const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true
        },
        password: {
            type: String,
            required: [false, 'password is required'],
            minLength: [6, 'password should contain at least 6 characters']
        },
    },
    {
        timestamps: true,
        versionKey: false
    });

UserSchema.path('email').validate(async (email) => {
    const count = await mongoose.model('User').count({ email });
    return !count;
}, 'email has already used');

UserSchema.pre('save',async function(next){
    try {
        const user = this;
        if (!user.isModified('password')) {
            return next();
        }
        user.password = await bcrypt.hash(user.password, 10);
        return next();
    } catch (e) {
        return next(e);
    }
})

UserSchema.methods.generateToken = function () {
    return jwt.sign({ user: this }, process.env.JWT_SECRET_KEY, {
        expiresIn: 86400
    })
};

module.exports = mongoose.model('User', UserSchema)