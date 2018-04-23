const router = require('express').Router();
const {LineItem, Order, Product} = require('../db/models');

module.exports = router;


router.get('/', (req,res,next) => {
    const id = req.user.id;

    Order.findAll({where: {userId: id, status: "complete"}, include: [{model: LineItem, include: [Product]}]})
          .then(orders => res.json(orders))
          .catch(next)
   })

router.get('/:orderId', (req, res, next) => {
    Order.findById(+req.params.orderId, { include: [LineItem]})
        .then(orders => res.json(orders)) 
        .catch(next);
})
