import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
            }}>
                <h1 className='mb-4'>404 Page Not Found!</h1>
                <Button variant='outline-primary' onClick={()=>navigate('/home')}>Back Home</Button>
        </div>
    );
};

export default NotFound;