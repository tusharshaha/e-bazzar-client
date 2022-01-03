import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, isLoading } = useFirebase();
    useEffect(() => {
        if (!isLoading) {
            axios.get(`https://secure-spire-40678.herokuapp.com/orders/${user?.email}`)
                .then(res => setOrders(res.data))
        }
    }, [user,isLoading])
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                <Table responsive size='sm' striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>P.Name</th>
                            <th>P.Price</th>
                            <th>P.Quantity</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {orders?.map(item => <tbody key={item._id}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.address}</td>
                            <td>{item.status}</td>
                        </tr>
                    </tbody>
                    )}
                </Table>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default MyOrders;