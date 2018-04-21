const router = require('express').Router();
const {LineItem, Order} = require('../db/models');

module.exports = router;

router.get('/', (req,res,next) => {
    const id = req.user ? req.user.id : req.sessionID;

    Order.findAll({where: {userId: id, status: "complete"}, include: [LineItem]})
          .then(orders => res.json(orders))
          .catch(next)
   })
