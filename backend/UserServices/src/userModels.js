import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


// Define the User schema
const userSchema = new mongoose.Schema({
    fullname: {
    type: String,
    required: [true, 'Full  Name is Required'],
    },
    email: {
      type: String,
      unique: [true, 'This email address already exists'],
      trim: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ],
      required: [true, 'Email address is required'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: [6, 'Password should be a minimum of 6 characters in length'],
      seect: false,
    },

});


// Encrypt user Password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to password in db
userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



// Create the User model
const User = mongoose.model('User', userSchema);

export default User
