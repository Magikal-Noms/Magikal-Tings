const router = require('express').Router();
const {LineItem, Order} = require('../db/models');

module.exports = router;

//card/products/

router.get('/', (req,res,next) => {
    const id = req.user.id;

    Order.findAll({where: {userId: id, status: "complete"}, include: [LineItem]})
          .then(orders => res.json(orders))
          .catch(next)
   })

router.get('/:orderId', (req, res, next) => {
    //Order.findAll 
        //.then 
})