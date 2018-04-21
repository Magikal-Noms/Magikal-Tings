import axios from "axios";

//Action types
const GET_USER_ORDERS = "GET_USER_ORDERS";

//Action creators
const getUserOrders = orders => {
  return { type: "GET_USER_ORDERS", orders };
};
//thunks
export const fetchUserOrders= () => {
  return function thunk(dispatch) {
    return axios
      .get("/api/orders")
      .then(res => res.data)
      .then(orders => {
        dispatch(getUserOrders(orders));
      })
      .catch(console.error);
  };
};

//reducer
const ordersReducer = function(state = null, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return action.orders;

    default:
      return state;
  }
};

export default ordersReducer;