
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    },
    get() {
      return '$' + this.getDataValue('price'); 
    }
  },
  //this is our version of "description", short for "metaphysical properties"
  properties: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  picture: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.pinimg.com/originals/d7/d5/d8/d7d5d8696a558172808274b154936db7.jpg'
  }
})

module.exports = Product;
