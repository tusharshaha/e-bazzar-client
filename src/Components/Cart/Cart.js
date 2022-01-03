import React, { useEffect, useState } from 'react';
import { Container, Table, Modal, Button } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import useProducts from '../../Hooks/useProducts'
import './Cart.css';
import useFirebase from '../../Hooks/useFirebase';
import axios from 'axios';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const [address, setAddress] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const { getStoredCart, removeProduct, clearTheCart, setCartNum } = useCart();
    const { products } = useProducts();
    const { user } = useFirebase();

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        const order = cartItem.map(item=> {
            const order1 = {
                name: item.name,
                price: item.price,
                email: user?.email,
                address: address,
                quantity: item.quantity,
                status: item.status
            }
            return order1
        })
        axios.post('https://secure-spire-40678.herokuapp.com/orders', order)
        .then(res => {
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Placed Your Order',
                    showConfirmButton: false,
                    timer: 1500
                })
                setModalShow(false);
                clearTheCart();
                setCartNum(0)
        }})
    }
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products?.find(product => product._id === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    addedProduct.status = 'COD';
                    storedCart.push(addedProduct);
                }
            }
            setCartItem(storedCart);
        }
    }, [getStoredCart, products, user,address])
    const reducer = (prev, current) => prev + parseInt(current.price);
    const grandTotal = cartItem.reduce(reducer, 0)
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
                            <th>Price</th>
                        </tr>
                    </thead>
                    {cartItem?.map(item => <tbody key={item._id}>
                        <tr>
                            <td><button onClick={() => removeProduct(item._id)} className='delete-btn'><AiOutlineCloseCircle /></button></td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    </tbody>)
                    }
                    {cartItem.length &&<tbody>
                        <tr>
                            <td></td>
                            <td><button onClick={()=> setModalShow(true)} className='order-btn'>Place Order</button></td>
                            <td colSpan={2}>Grand Total: <span className='ms-4'>{grandTotal}</span></td>
                        </tr>
                    </tbody>}
                </Table>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div className='address-form'>
                        <h3 className='text-center my-5'>Type Your Address</h3>
                        <form onSubmit={handlePlaceOrder}>
                            <input onBlur={(e)=>setAddress(e.target.value)} type="text" placeholder='Your Addres' required/>
                            <Button type='submit' variant='outline-dark' className='mb-5'>Confirm</Button>
                        </form>
                    </div>
                </Modal>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Cart;