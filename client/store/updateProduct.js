import axios from 'axios';
// move to products reducer -- kHSG
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
     .then(res => dispatch(update(res.data))) // after dispatch push to history the location of the new product and go to that page -- KHSG
     .catch(err => console.error(`Updating product ${product}`)) // in production you want to actually tell the user something has gone wrong -- KHSG
 }
 
export default updateReducer