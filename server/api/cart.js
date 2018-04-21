const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router


router.get('/', (req,res,next) => {
  const id = req.user ? req.user.id : req.sessionID
  console.log("req.session!!!!!!!!!!!!!!!!!", id)
  Order.findAll({where: {userId: id, status: "pending"}, include: [LineItem]})
        .then(cart => res.json(cart))
        .catch(next)
})
