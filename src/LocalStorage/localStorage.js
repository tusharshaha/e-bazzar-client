// find added products
const getOrders = () => window.localStorage.getItem('products');
// update cart product
const updateCart = cart => window.localStorage.setItem('products', JSON.stringify(cart));
// add to localStorage
const addCart = (id) => {
    const products = getOrders();
    let orders = {}
    if (!products) {
        orders[id] = 1
    } else {
        orders = JSON.parse('products');
        if (orders[id]) {
            const newCount = orders[id] + 1;
            orders[id] = newCount;
        } else {
            orders[id] = 1;
        }
    }
    updateCart(orders)
}
// get products from local storage
const getStoredCart = () => {
    const exists = getOrders();
    return exists ? JSON.parse(exists) : {};
}
// remove single product form local storage
const removeProduct = (id)=>{
    const products = getOrders();
    let order = {}
    if(products[id]){
        order = JSON.parse(products)
        delete order[id]
    }
}
// clear products from loacl storage
const clearTheCart = () => window.localStorage.removeItem('products');

export {addCart, getStoredCart, removeProduct, clearTheCart};