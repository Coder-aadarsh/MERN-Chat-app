const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        index: true,
        validate: [isEmail, "invalid email entered"]
    },
    password:{
        type: String,
        required: true
    },
    picture:{
        type: String
    },
    newMessage:{
        type: Object,
        default: {}
    },
    status:{
        type: String,
        default: 'online'
    }
}, {minimize: false});
//Setting { minimize: false } in your schema definition tells Mongoose not to remove fields with empty values during the conversion process

//This is the function that hashes the password of the user beforing saving to database
userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
})

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

//we need to create the method called - findByCredentials
userSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({email});
    if(!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('Invalid email or password');
    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;