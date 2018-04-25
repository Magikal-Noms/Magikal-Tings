import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';


const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
 document.location='/confirmation'
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, OrderId) => token => {
   axios.post(PAYMENT_SERVER_URL,
    {
      source: token.id,
      currency: CURRENCY,
      OrderId: OrderId,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
}

const Checkout = ({ amount, OrderId }) =>
  <StripeCheckout
    OrderId={OrderId}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, OrderId)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;
