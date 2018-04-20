const router = require('express').Router()

const {Category, Product} = require('../db/models')

module.exports = router;

router.get('/:categoryId/products', (req, res, next) => {
 Product.findAll({
   where: {
     categoryId : +req.params.categoryId
   }
 })
})
