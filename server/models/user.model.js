const mongoose = require('mongoose')
const crypto = require('crypto')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  role: {
    type: ['user', 'landlord', 'lead-operator', 'admin'],
    default: 'user'
  },
  hashed_password: {
    type: String,
    required: [true, "Password is required"]
  },
  passwordConfirm: {
    type: String,
    trim: true,
    required: [true, 'Confirm your password'],
    validate: {
      validator: function(el){
        return el === this.password
      },
      message: 'Passwords are not the same'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type:Boolean,
    default: true,
    select: false //to hide the password from output
  },
    landlord: {
      type:Boolean,
      default: false
    },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

UserSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 8) {
    this.invalidate('password', 'Password must be at least 8 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
}

module.exports =  mongoose.model('User', UserSchema)
