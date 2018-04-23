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

router.post('/products/:productId', (req,res,next) => {

  const productId = +req.params.productId
  const id = req.user ? req.user.id : req.sessionID
  User.findOne({where: {id}})
    .then(user => Order.findOrCreate({where: {
      userId: id,
      billingAddress: user.billingAddress,
      status: 'pending'
    }}))
    .spread((order, wasCreated) =>

      LineItem.findOrCreate({where: {
        orderId: order.id,
        productId,
        quantity: req.body.quantity

    }}))
    .spread((lineItem, wasCreated) => {
      if(!wasCreated) {
        lineItem.update({quantity: lineItem.quantity + 1})
      }
    })

    .then(lineItem => res.json(lineItem))
    .catch(next);

})

router.delete('/:itemId', (req, res, next) => {
  LineItem.destroy({where: {id: +req.params.itemId}})
  .then(() => res.sendStatus(204))
  .catch(next);
})
