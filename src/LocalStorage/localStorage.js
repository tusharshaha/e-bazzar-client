import {useState} from 'react';
import Swal from 'sweetalert2';
const useLocalStorage = () => {
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
            orders = JSON.parse(products);
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
    // add to cart
    const [cartNum, setCartNum] = useState(
        Object.keys(getStoredCart()).length
    )
    const handleCart = (id) => {
        addCart(id)
        const product = getStoredCart()
        if (product[id]) {
            const cartLength = Object.keys(product).length;
            setCartNum(cartLength)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Added To Cart',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Try Again!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    // remove single product form local storage
    const removeProduct = (id) => {
        const products = getOrders();
        let order = {}
        if (products[id]) {
            order = JSON.parse(products)
            delete order[id]
        }
    }
    // clear products from loacl storage
    const clearTheCart = () => window.localStorage.removeItem('products');
    return { addCart, getStoredCart, removeProduct, clearTheCart, handleCart,cartNum }
}
export default useLocalStorage;