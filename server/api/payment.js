const stripe = require('../constants/stripe');
const router = require('express').Router();

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

  router.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  router.post('/', (req, res) => {
    // console.log("REQ.BODY", req.body)
    // console.log("RES", res)
    stripe.charges.create(req.body, postStripeCharge(res))
    .then(res => console.log(res))

  });


module.exports = router;
