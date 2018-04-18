import axios from 'axios';

const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const update = product => {
    return { type: 'UPDATE_PRODUCT', product}
}

const updateReducer = function (state=[], action) {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return state.map(product => (
                action.product.id === product.id ? action.product : product
            ))

        default:
            return state
    
    }
}
export const updateProduct = (id, updatedProduct) => dispatch => {
    axios.put(`/api/products/${id}`, updatedProduct)
     .then(res => dispatch(update(res.data)))
     .catch(err => console.error(`Updating product ${product}`))
 }
 
export default updateReducer