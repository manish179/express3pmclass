const express=require('express')
const { requireSignin } = require('../controllers/authController')
const {  postCategory, categoryList, HelloFunction, showCategoryList, categoryDetails, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router=express.Router()

router.get('/test',HelloFunction)
router.post('/postcategory',requireSignin,postCategory)
router.get('/categorylist',categoryList)
router.get('/categorylist',showCategoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',requireSignin,updateCategory)
router.delete('/deletecategory/:id',requireSignin,deleteCategory)

module.exports=router