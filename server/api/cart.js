const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router

router.use( async (req,res,next) => {
  const [cart] = await Order.findOrCreate({where: {
    userId: req.user.id,
    billingAddress: req.user.billingAddress,
    status: 'pending'
  }})
  .catch(next)
  req.cart = cart
  req.session.cartId = cart.id
  next()
})
router.get('/', (req,res,next) => {
  res.json(req.cart)
 
})

router.post('/products/:productId', async (req,res,next) => {

  const productId = +req.params.productId

    await LineItem.findOrCreate({where: {
        orderId: req.cart.id,
        productId,
    }})
    .spread((lineItem, wasCreated) => {
      if(!wasCreated) {
        lineItem.update({quantity: lineItem.quantity + 1})
      }
    })
    .catch(next)
    await req.cart.reload()
    res.json(req.cart)
   

})

router.put('/:itemId', (req,res,next) => {
    LineItem.findById(req.params.itemId)
    .then(lineItem => lineItem.update(req.body.quantity))
    .then(() => re.json(req.cart))
    .catch(next)
})

router.delete('/:itemId', (req, res, next) => {
  LineItem.destroy({where: {id: +req.params.itemId}})
  .then(() => req.cart.reload())
  .then(() => res.json(req.cart))
  .catch(next);
})
