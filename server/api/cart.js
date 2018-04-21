const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router


router.get('/', (req,res,next) => {
  LineItem.findAll({include:[{model: Order, include: [User]}, Product]})
        .then(cart => res.json(cart))
        .catch(next)
})
