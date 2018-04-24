const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY' //only have test key so far
  : 'pk_test_NzMP1gSf3zjt2ZPcUELKBKPU';

export default STRIPE_PUBLISHABLE;
