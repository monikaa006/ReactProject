import React, { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import Pagination from "./Pagination";



function ViewProdocts() {
    const [products, setProducts] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
  const [UserperPage] = useState(4);

    const loadProducts = async () => {
        const result = await axios.get('http://localhost:3009/products');
        console.log("-----------------------",result)
    
        setProducts(result.data)
      };

      const handleDelete = async id => {
        await axios.delete(`http://localhost:3009/products/${id}`)
       
        loadProducts();
      }
    useEffect(() => {

        loadProducts();
      }, [])


  //pagination
  const indexOfLastUser = currentpage * UserperPage;
  const indexOfFirstUser = indexOfLastUser - UserperPage;
  const currentProducts =  products.slice(indexOfFirstUser, indexOfLastUser);
  console.log(products, "-----");
  const totalNum =Math.ceil(products.length / UserperPage);



  return (
    
    <>
    <Navbar/>


                         
                          
    <div className="container">
    <h3 style={{textAlign:"center"}}>Products</h3>
    {
        <table className="table border shadow  table-bordered  border-primary">
        <thead className="table-light table-bordered  border-primary ">
          <tr >
            <th scope='col' >id</th>
            <th scope='col' >title
              
            </th>

            <th scope='col'  >discription
            
            </th>
            <th scope='col'>products image
              
            </th>
            <th scope='col'> price</th>
            <th scope='col'> Actions     </th>

          </tr>
        </thead>
        <tbody>
          {
           
           currentProducts && currentProducts.length > 0 ?
           currentProducts.map((product, index) => (

                <tr key={product.id}>

                  <td>{product.id}</td>
                  <td > {product.title}</td>
                  <td > {product.description}</td>
                  <td > <img style={{width:"140px", height:"170px"}} src={product.thumbnailUrl} alt="icons" /></td>
                  <td >{product.price}</td>

                  <td>
                    <Link type="submit"  className="btn btn-danger mb-1" onClick={() => handleDelete(product.id)} to="/ViewProducts">Delete</Link>
                    <Link type="submit" className="btn btn-success ms-1 " to={`/Edit/${product.id}`} >Edit</Link>
                   </td>
                </tr>

              )):"Data naot found"
              
          }


        </tbody>
      </table>
       
    }
     <Pagination pages={totalNum}
            setCurrentpage={setCurrentpage}
            


          />
    </div>
   
    </>
    
  )
}

export default ViewProdocts
