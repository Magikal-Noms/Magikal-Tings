const router = require('express').Router();
const {LineItem, Order, Product} = require('../db/models');

module.exports = router;

  router.get('/', (req, res, next) =>
  {
    if (req.user !== undefined)
    {
      const id = req.user.id;

      Order.findAll({where: {userId: id, status: "complete"}, include: [{model: LineItem, include: [Product]}]})
        .then(orders => res.json(orders))
        .catch(next)
    } else {
      res.json("You are not logged in")
    }
  })

  router.get('/:orderId', (req, res, next) =>
  {
    if (req.user !== undefined)
    {
      Order.findById(+req.params.orderId, {include: [LineItem]})
        .then(orders => res.json(orders))
        .catch(next);
    } else {
      res.json("You are not logged in")
    }
  })


