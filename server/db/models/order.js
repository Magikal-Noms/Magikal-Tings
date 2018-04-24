
const Sequelize = require('sequelize')
const db = require('../db')
const LineItem = require('./lineitem')
const Product = require('./product')

const Order = db.define('order', {
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM('complete', 'pending')
  },
  userId: {
    type: Sequelize.INTEGER,
  }
},
{
  defaultScope:  {include: [{model: LineItem, include: [Product]}]}
})


module.exports = Order;
