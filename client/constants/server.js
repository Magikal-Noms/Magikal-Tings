const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'floating-bayou-40470.herokuapp.com/api/payment'
  : 'http://localhost:8080/api/payment';

export default PAYMENT_SERVER_URL;
