import React, { createContext,  useEffect,  useState } from 'react'
import axios from '../axiosConfig';
import { useParams } from 'react-router-dom';

export const ProductContext= createContext();
function Context(props) {
    const[product,setProduct]=useState([]);
    const {id} =useParams();
    console.log(id)
    const getSingleProduct = async () => {
        const response = await axios.get(`/api/restaurant/getmenuItemById/${id}`);
        setProduct(response.data.data);
    }
    console.log(product);
    useEffect(()=> 
        {         
          getSingleProduct();
        }, []);
    console.log(product);
  
  return (
    <ProductContext.Provider value={[product,setProduct]}>
        {props.children}
    </ProductContext.Provider>
  );
};

export default Context;