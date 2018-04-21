const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router


router.get('/', (req,res,next) => {
 const id = req.user ? req.user.id : req.sessionID
 console.log('body', req.body)
 Order.findAll({where: {userId: id, status: "pending"}, include: [{model: LineItem, include: [Product]}]})
       .then(cart => res.json(cart))
       .catch(next)
})


router.post('/', (req,res,next) => {
  const id = req.user ? req.user.id : req.sessionID
  Order.findOrCreate({where: {userId: id, status: 'pending'} })
})
