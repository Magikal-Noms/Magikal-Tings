const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order, Product, User} = require('../db/models')
module.exports = router

router.use( async (req,res,next) => {

  let cart;

  if (req.session.cartId !== undefined)
  {
    cart = await Order.findOne({
      where: {
        id: req.session.cartId,
        status: 'pending'
      }
    }).catch(next)
  }

  else if (req.user)
  {
    cart = await Order.findOne({
      where: {
        userId: req.user.id,
        status: 'pending'
      }
    }).catch(next)
  }

  else {
    cart = await Order.create({
      status: 'pending'
    }).catch(next)
  }

  // const [cart] = await Order.findOrCreate({where: {
  //   req.session.cartId ? id: req.session.cartId : userId: req.user.id,
  //   billingAddress: req.user ? req.user.billingAddress : ,
  //   status: 'pending'
  // }})
  // .catch(next)
  // console.log("*********************************Cart is", cart)

  req.cart = cart
  // console.log("After req.cart is", req.cart)
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
