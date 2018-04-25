const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router

router.use( async (req,res,next) => {


  let cart
  const search = {status: 'pending'}
  if (req.session.cartId)
    search.id = req.session.cartId
  else if (req.user)
    search.userId = req.user.id
  console.log('!!!! ', search)
  if (!req.user && !req.session.cartId)
    cart = await Order.create(search)
  else
    cart = await Order.findOrCreate({ where: search })
    .then(([foundOrCreatedCart]) => {
      if (req.user && req.session.cartId && !foundOrCreatedCart.userId)
        return foundOrCreatedCart
          .update({userId: req.user.id})
      return foundOrCreatedCart
    })
    .catch(next)


  req.cart = cart

  if (req.cart)
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

router.delete('/:itemId', (req, res, next) => {
  LineItem.destroy({where: {id: +req.params.itemId}})
  .then(() => req.cart.reload())
  .then(() => res.json(req.cart))
  .catch(next);
})
