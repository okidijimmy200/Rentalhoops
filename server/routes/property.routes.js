const express = require('express')
const authCtrl = require('../controllers/auth.controller')
const propertyCtrl = require('../controllers/property.controller')
const useCtrl = require('../controllers/user.controller')

const router = express.Router()

router.route('/api/property/by/:userId')
    .post(authCtrl.requireSignin, authCtrl.hasAuthorization, useCtrl.isLandlord,propertyCtrl.create)
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, propertyCtrl.listByLandlord)


// get the route
router.route('/api/property/propertyphotoprimary/:propertyId')
    .get(propertyCtrl.photoPrimary)

router.route('/api/property/propertyphotosecondary/:propertyId')
    .get(propertyCtrl.photoSecondary)

router.route('/api/property/propertyphototetiary/:propertyId')
    .get(propertyCtrl.photoTetiary)

//route to list all the properties
router.route('/api/property/allproperty')
    .get(propertyCtrl.list)

// router for searching property
router.route('/api/property/searchproperty')
    .get(propertyCtrl.searchProperty)


//search property according to roomNumber
router.route('/api/property/roomsearch')
    .get(propertyCtrl.roomSearch)
//router for searching according to categories
router.route('/api/property/categories')
    .get(propertyCtrl.listCategories)

//like route
router.route('/api/property/like')
    .put(authCtrl.requireSignin, propertyCtrl.like)
//unlike route
router.route('/api/property/unlike')
    .put(authCtrl.requireSignin, propertyCtrl.unlike)

//getting the favourite property
router.route('/api/property/favourite')
    .get(propertyCtrl.favourite)
//delete property route
router.route('/api/property/:propertyId')
    .delete(authCtrl.requireSignin, propertyCtrl.isOwner, propertyCtrl.remove)

//readpropertyviews controller
router.route('/api/property/:propertyId')
    .get(propertyCtrl.incrementViews, propertyCtrl.readPropertyViews)

//likes count
router.route('/api/likescount/:userId')
    .get(authCtrl.requireSignin, propertyCtrl.cartLikes)

router.param('propertyId', propertyCtrl.propertyByID)

router.param('userId', useCtrl.userByID)

module.exports =  router