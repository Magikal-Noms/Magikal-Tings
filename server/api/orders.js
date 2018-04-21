const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    const id = req.user ? req.user.id : req.sessionID; 

    Order.findAll({where: {userId: id, status: "complete"}, include: [LineItem]})
          .then(orders => res.json(orders))
          .catch(next)
   })

module.exports = router; 