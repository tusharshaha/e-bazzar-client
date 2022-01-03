import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useFirebase();
    let location = useLocation();
    if (isLoading) {
        return <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Spinner animation="border" variant="danger" className='p-5 fs-1' />
        </div>
    }
    if (!isLoading) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;