import axios from 'axios';

const CREATE_PRODUCT = 'CREATE_PRODUCT'

const create = product => {
    return { type: 'CREATE_PRODUCT', product}
}

const createReducer = function(state= [], action ) {
    switch (action.type) {
        case CREATE_PRODUCT:
        return [...state, action.product]
        default: return state
    }
}
export const addProduct = product => dispatch => {
    axios.post('/api/products', product)
         .then(res => dispatch(create(res.data)))
         .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
 }