const Property = require('../models/property.model')
const errorHandler = require('../helpers/dbErrorHandler')
const formidable = require('formidable')
// const extend = require('lodash/extend')
const fs = require('fs')


// creating a form
const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async(err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: 'Image could not be uploaded'
            })
        }
        let property = new Property(fields)
        property.owner = req.profile
        if(files.image) {
            property.image.data = fs.readFileSync(files.image.path)
            property.image.contentType = files.image.type
        }
        try {
            let result = await property.save()
            res.json(result)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }

    })
}

// retrieving property

const propertyByID = async (req, res, next, id) => {
    try {
        let property = await Property.findById(id).populate('owner', '_id name').exec()
        if (!property)
            return res.status('400').json({
                error: 'Property not found'
            })
            req.property = property
            next()
    } catch(err) {
        return res.status('400').json({
            error: 'Could not retrieve property'
        })
    }
}

//read request
const read = (req, res) => {
    req.property.image = undefined
    return res.json(req.property)
}

//to check if the user is a landlord
const isOwner = (req, res, next) => {
    const isOwner = req.property && req.auth && req.property.owner._id == req.auth._id
    if(!isOwner) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }
    next()
}

//list by landlord
 const listByLandlord = (req, res) => {
     Property.find({owner: req.profile._id}, (err, property) => {
         if (err) {
             return res.status(400).json({
                 error: errorHandler.getErrorMessage(err)
             })
         }
         res.json(property)
     }).populate('owner', '_id name')
 } 

 //photo controller
 const photo = (req, res, next) => {
     if(req.property.image.data) {
         res.set("Content-Type", req.property.image.contentType)
         return res.send(req.property.image.data)
     }
     next()
 }


 //list all the available properties
 const list = async (req, res) => {
     try {
         let property = await Property.find().select('name location price bedRooms bathRooms familyNumber')
         res.json(property)
     } catch (err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }

 module.exports =  {
    create,
    read,
    propertyByID, 
    isOwner,
    listByLandlord, 
    photo,
    list
}