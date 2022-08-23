import React, { useState } from "react";
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";


const AddProduct = () => {
  let navigate = useNavigate();
  
  const [products, setProducts] = useState({
    id: "",
    title: "",
    url: "",  
    price: "",
    description: ""
  });

  const { id,title,url,price,description } = products;
  const onInputChange = e => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  // Add New Table Row for using post method
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3009/products", products);
    navigate("/");
  };
  
  return (

    <>
    <br/><br/>
    <NavLink className='btn btn-primary' exact to={'/'}>back to home</NavLink>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"><u>Add new product</u></h2>
        <form onKeyDown={async (e) => {
              if (e.key === "Enter") await onSubmit(e)
            }}  onSubmit={ (e)=>onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter product id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)} required 
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Product Url"
              name="url"
              value={url}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter product price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br/>
          <button className="btn btn-primary btn-block">Add New Product</button>
        

        </form>
      </div>
    </div>
    </>
  );
};

export default AddProduct;