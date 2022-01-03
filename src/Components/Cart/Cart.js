import React, { useEffect, useState} from 'react';
import {Container, Table } from 'react-bootstrap';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import useCart from '../../Hooks/useCart';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import useProducts from '../../Hooks/useProducts'
import './Cart.css';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const { getStoredCart,removeProduct} = useCart();
    const { products } = useProducts()


    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = []
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products?.find(product => product._id === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    addedProduct.price = addedProduct.price * addedProduct.quantity
                    storedCart.push(addedProduct);
                }
            }
            setCartItem(storedCart);
        }
    }, [getStoredCart,products,cartItem.price])
    const reducer = (prev, current)=> prev + parseInt(current.price);
    const grandTotal = cartItem.reduce(reducer,0)
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                <h2 className='fw-bold text-center mb-5'>Your <span className='text-danger'>Cart</span> Items</h2>
                <Table responsive size='sm' striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    {cartItem?.map(item => <tbody key={item._id}>
                        <tr>
                            <td><button onClick={()=>removeProduct(item._id)} className='delete-btn'><AiOutlineCloseCircle/></button></td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    </tbody>)
                    }
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={2}>Grand Total: <span className='ms-4'>{grandTotal}</span></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Cart;