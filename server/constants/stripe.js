const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_sQl9f42CXlzkjUdco49YJStO'
    : 'sk_test_sQl9f42CXlzkjUdco49YJStO';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
