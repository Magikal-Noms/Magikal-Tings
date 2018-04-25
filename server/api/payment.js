const stripe = require('../constants/stripe');
const router = require('express').Router();
const {Order} = require('../db/models');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  console.log("IN POST S C", stripeErr, stripeRes)
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

  router.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  router.post('/', (req, res, next) => {
    console.log("REQ BODY", req.body.OrderId)
    const reqBody = {
      source: req.body.source,
      currency: req.body.currency,
      amount: req.body.amount
    }
    Order.findById(req.body.OrderId)
    .then(order => order.update({status: 'complete'}))
    .then(updatedOrder => delete req.session.cartId)
    .then(() => stripe.charges.create(reqBody, postStripeCharge(res)))
    .then(res => console.log(res))
    .catch(next)

  });


module.exports = router;
