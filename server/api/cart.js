const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router


router.get('/', (req,res,next) => {
 const id = req.user ? req.user.id : req.sessionID
 console.log('body', req.user.id)
 Order.findAll({where: {userId: id, status: "pending"}, include: [{model: LineItem, include: [Product]}]})
       .then(cart => res.json(cart))
       .catch(next)
})


router.post('/', (req,res,next) => {
  const id = req.user ? req.user.id : req.sessionID
  User.findOne({where: {id}})
    .then(user => Order.findOrCreate({where: {
      id, 
      shippingAddress: user.shippingAddress,
      billingAddress: user.billingAddress,
      status: 'pending'
    }}))
  
})
