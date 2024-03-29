import { useState } from 'react';
import Swal from 'sweetalert2';
import useFirebase from '../Hooks/useFirebase';
const useLocalStorage = () => {
    const { user } = useFirebase();
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
        if (user?.email) {
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
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'You must login first!',
            })
        }
    }

    // remove single product form local storage
    const removeProduct = (id) => {
        const products = getStoredCart();
        if (products[id]) {
            delete products[id]
            updateCart(products)
            const cartLength = Object.keys(products).length;
            setCartNum(cartLength)
        }
    }

    // clear products from loacl storage
    const clearTheCart = () => window.localStorage.removeItem('products');
    return { addCart, getStoredCart, removeProduct, clearTheCart, handleCart, cartNum, setCartNum }
}
export default useLocalStorage;