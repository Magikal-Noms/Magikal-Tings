import axios  from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS'

const getProducts = products => {
    return {type: 'GET_PRODUCTS', products}
}

const productsReducer = function(state = [], action) {
    
    switch(action.type) {
        case GET_PRODUCTS: 
        return action.products
        default: return state
    }
}

export const fetchProducts = () => {
    
    return function thunk (dispatch) {
        return axios.get ('/api/products')
        .then(res => res.data)
        .then(products => {
          dispatch(getProducts(products))
        })
        .catch(console.error)
        }
    }


export default productsReducer