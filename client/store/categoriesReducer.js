import axios from "axios";

//Action types
const GET_CATEGORIES = "GET_CATEGORIES";

//Action creators
const getCategories = categories => {
  return { type: "GET_CATEGORIES", categories };
};
//thunks
export const fetchCategories = () => {
  return function thunk(dispatch) {
    return axios
      .get("/api/categories")
      .then(res => res.data)
      .then(categories => {
        dispatch(getCategories(categories));
      })
      .catch(console.error);
  };
};

//reducer
const categoriesReducer = function(state = null, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoriesReducer;
