import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState({
  
   
    title: "",
    discription: "",
    thumbnailUrl: "",
    price: "",
   
  });
  const {  title,discription,thumbnailUrl,price } = products;
  const {id } = useParams();
  const loaduser = async () => {

    const result = await axios.get(`http://localhost:3009/products/${id}`);
    setProducts(result.data);

  }
  useEffect(() => {

    loaduser();
  },[]);


  const onInputChange = e => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const [editdata, setEditdata] = useState([]);
  //Edit the user data through put method 
  const onSubmit = async (e) => {
   e.preventDefault();
   console.log("666666666666666666 edit from was working");
   const updateproduct= await axios.put(`http://localhost:3009/products/${id}`,products);
   setEditdata(updateproduct);
   console.log("ooooooooooo",editdata)
   navigate("/ViewProducts");
   
  }
  return (
    <div className="container">
      <br/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"><u>Edit  User {id}</u></h2>
        <form onKeyDown={async (e) => {
              if (e.key === "Enter") await onSubmit(e)
            }}  onSubmit={ (e)=>onSubmit(e)}>
         
          <br />
          <div className="form-group">
            <input type="text" className="form-control form-control-lg"
              placeholder="Enter product title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
             
              name="discription"
              value={discription}
              onChange={e => onInputChange(e)} required 
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
             
              name="thumbnailUrl"
              value={thumbnailUrl}
              onChange={e => onInputChange(e)} required 
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              
              name="price"
              value={price}
              onChange={e => onInputChange(e)} required
            />
            <br />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
          <Link className="btn btn-danger  ms-1" to={"/ViewProducts"}>cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;