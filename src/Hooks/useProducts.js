import axios from 'axios';
import {useEffect, useState} from 'react';
const useProducts = ()=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://secure-spire-40678.herokuapp.com/products')
        .then(res=> setProducts(res.data))
    },[])
    return {products}
}

export default useProducts;