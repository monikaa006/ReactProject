
import React, { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux"
import { FaShoppingCart} from 'react-icons/fa'
import { AddCart } from "./Action";



function Prodocts() {
    const [products, setProducts] = useState([]);
    const list = useSelector((state) => state.AddCart)
    const dispatch = useDispatch()

    const loadProducts = async () => {
        const result = await axios.get('http://localhost:3009/products');
        console.log("-----------------------",result)
    
        setProducts(result.data)
      };

 
    useEffect(() => {

        loadProducts();
      }, [])
  return (
    
    <>
    <Navbar/>
 <FaShoppingCart style={{marginLeft:"990px",size:"30px"}}></FaShoppingCart>

                         
                          
    <div className="container">
    <h3 style={{textAlign:"center"}}>Products</h3>
    {
         <div  className="w-75 mx-auto shadow p-5" >
            {
      products.map((products,index)=>(
    
        <div  className="w-50 mx-auto shadow p-5" style={{marginBottom:"20px"}} key={products.id} >
          

        <p>Title-{products.title}</p>
        <img style={{width:"60%", height:"50%"}} src={products.url} alt="icons" />
        <br/>
        
        <h5 style={{textAlign:"center"}}>Price-{products.price}</h5>

        
        <button className="btn btn-primary" onClick={() => dispatch(AddCart(Prodocts))}>Add To Card</button>
        </div>
        
      )) 
}
      </div>
       
    }
    </div>
   
    </>
    
  )
}

export default Prodocts
