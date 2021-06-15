const Property = require('../models/property.model')
const errorHandler = require('../helpers/dbErrorHandler')
const formidable = require('formidable')
const fs = require('fs')
const { query } = require('express')

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
        if(files.imagePrimary && files.imageSecondary && files.imageTetiary) {
            property.imagePrimary.data = fs.readFileSync(files.imagePrimary.path)
            property.imagePrimary.contentType = files.imagePrimary.type

            property.imageSecondary.data = fs.readFileSync(files.imageSecondary.path)
            property.imageSecondary.contentType = files.imageSecondary.type

            property.imageTetiary.data = fs.readFileSync(files.imageTetiary.path)
            property.imageTetiary.contentType = files.imageTetiary.type
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
        let property = await Property.findById(id).populate('owner', '_id name email').exec()
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
    req.property.imagePrimary  = undefined
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

//  const listPropertyLikedByUser
 //photo controller
 const photoPrimary = (req, res, next) => {
     if(req.property.imagePrimary.data) {
         res.set("Content-Type", req.property.imagePrimary.contentType)
         return res.send(req.property.imagePrimary.data)
     }
     next()
 }

 const photoSecondary = (req, res, next) => {
    if(req.property.imageSecondary.data) {
        res.set("Content-Type", req.property.imageSecondary.contentType)
        return res.send(req.property.imageSecondary.data)
    }
    next()
}

const photoTetiary = (req, res, next) => {
    if(req.property.imageTetiary.data) {
        res.set("Content-Type", req.property.imageTetiary.contentType)
        return res.send(req.property.imageTetiary.data)
    }
    next()
}


 //list all the available properties
 const list = async (req, res) => {
     try {
         let property = await Property.find().select('name location price bedRooms bathRooms familyNumber category likes')
         res.json(property)
     } catch (err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }

const searchProperty = async (req, res) => {
    const keyword= {}
    if (req.query.keyword)
        keyword.location = {'$regex': req.query.keyword,'$options': 'i'}
    if(req.query.category && req.query.category != 'All')
        keyword.category = req.query.category

    try {
        let property = await Property.find(keyword).populate('owner', '_id name').select('-imagePrimary -imageSecondary -imageTetiary').exec()
        res.json(property)
    } 
    
    catch(err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

//search property according to roomSIze
const priceSearch = async (req, res) => {
    const query = {}
    if (req.query.priceMin && req.query.priceMax)
        query.price = {'$gte':req.query.priceMin, '$lte': req.query.priceMax}

    try {
        let property = await Property.find(query).populate('owner', '_id name').select('-imagePrimary -imageSecondary -imageTetiary').exec()
        res.json(property)
    } 
    catch(err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

// search according to room number
const roomSearch = async (req, res) => {
    roomNumber = {}
    if (req.query.roomNumber) {
        roomNumber.bedRooms = req.query.roomNumber
    }
    try {
        let property = await Property.find(roomNumber).populate('owner', '_id name').select('-imagePrimary -imageSecondary -imageTetiary').exec()
        res.json(property)
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
    }
}

//searching properties from list priced to highest priced
const lowestPriceToHigh = async (req, res) => {
    try {
        let property = await Property.find()
        .select('-imagePrimary -imageSecondary -imageTetiary')
        .sort('price').exec()
        res.json(property)
    } catch(err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
  
}

// search according to newest property
const newestProperty = async (req, res) => {
    try {
        let property = await Property.find()
        .select('-imagePrimary -imageSecondary -imageTetiary')
        .sort('-created').exec()
        res.json(property)
    } catch(err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
  
}
 const listCategories = async (req, res) => {
     try {
         let property = await Property.distinct('category', {})
         res.json(property)
     }catch(err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }

 //delete property controller
 const remove = async (req, res) => {
     try {
         let property = req.property
         let deleteProperty = await Property.remove()
         res.json(deleteProperty)
     } catch(err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }

 const like = async (req, res) => {
     try {
         let result = await Property.findByIdAndUpdate(req.body.propertyId, {$push: {likes: req.body.userId}}, {new: true})
         res.json(result)
     } catch(err){
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }
 //unlike
 const unlike = async (req, res) => {
     try {
         let result = await Property.findByIdAndUpdate(req.body.propertyId, {$pull: {likes: req.body.userId}}, {new: true})
         res.json(result)
     }
     catch(err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }
 //increment views
 const incrementViews = async (req, res, next) => {
     try {
         await Property.findByIdAndUpdate(req.property._id, {$inc: {"views": 1}}, {new: true}).exec()
         next()
     } catch(err) {
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }


 //get the most favoured buildings based on save history
 const favourite = async (req, res) => {
     try {
        let result = await Property.find({}).limit(3)
        .select('name location views price bedRooms bathRooms familyNumber category likes')
        .sort('-views')
        .exec()
        res.json(result) 
     }
     catch(err){
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
 }

 //readProperty controller
 const readPropertyViews = (req, res) => {
    req.property.imagePrimary  = undefined
    req.property.imageSecondary  = undefined
    req.property.imageTetiary  = undefined
    return res.json(req.property)
 }

 const cartLikes = async (req, res) => {
     try {
       let result = await Property.find({likes: req.profile._id})
       return res.json(result)
     }
     catch(err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
    
 }
 module.exports =  {
    like,
    cartLikes,
    unlike,
    create,
    incrementViews,
    read,
    readPropertyViews,
    propertyByID, 
    isOwner,
    listByLandlord, 
    photoPrimary,
    photoSecondary,
    photoTetiary,
    list,
    searchProperty,
    listCategories,
    remove,
    favourite,
    priceSearch,
    roomSearch,
    lowestPriceToHigh,
    newestProperty
}