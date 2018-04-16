
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL, 
    allowNull: false, 
    validate: { 
        min: 0
    }
  },
  properties: {
    type: Sequelize.TEXT 
  }, 
  category: {
      type: Sequelize.STRING 
  }, 
  picture: {
      type: Sequelize.STRING, 
      defaultValue: 'https://i.pinimg.com/originals/d7/d5/d8/d7d5d8696a558172808274b154936db7.jpg'
  }
})

Product.getProductByType = function(searchType) {
    return Product.findAll({ where: {
        type: searchType
    }}); 
}


module.exports = Product; 