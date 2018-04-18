import axios  from 'axios';

const GET_PRODUCT = 'GET_PRODUCT'

const getProduct = product => {
    return {type: 'GET_PRODUCT', product}
}

const productReducer = function(state = {}, action) {
    
    switch(action.type) {
        case GET_PRODUCT: 
        return action.product
        default: return state
    }
}

export const fetchProduct = (productId) => {
    const id = productId; 
    return function thunk (dispatch) {
        return axios.get (`/api/products/${id}`)
        .then(res => res.data)
        .then(product => {
          dispatch(getProduct(product))
        })
        .catch(console.error)
        }
    }


export default productReducer