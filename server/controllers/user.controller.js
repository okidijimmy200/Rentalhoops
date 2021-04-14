const User = require('../models/user.model')
const extend = require('lodash/extend')
const errorHandler = require('./../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken')
// import jwt from 'express-jwt'


//create a token
const signToken = id => {
  //using payload
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

//create and send token
const createSendToken = (user, statusCode, res) => {
  //using JWT payload and secret
  const token = signToken(user._id)
  const cookieOptions = {
      expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
          // cookie cant be modified in the browser
          httpOnly: true
  };
    //--to perform secure to true in prod only
    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true //secure: true, //cookie will be sent only on https
    // send a cookie
    res.cookie('jwt', token, cookieOptions)

    // hide password on signup
    user.password = undefined

      //send new user to client
      res.status(statusCode).json({
        status: 'Success',
        token,
        data: {
          user
        }
      })
}


const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    createSendToken(user, 201, res)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

// login the client

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    await user.save()
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

//is landlord
const isLandlord = (req, res, next) => {
  const isLandlord = req.profile && req.profile.landlord
  if (!isLandlord){
    return res.status('403').json({
      error: 'User is not a landlord'
    })
  }
  next()
}

module.exports =  {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  isLandlord
}
