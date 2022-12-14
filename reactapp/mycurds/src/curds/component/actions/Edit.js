import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const { name, username, email, phone, website } = user;
  const { id } = useParams();
  const loaduser = async () => {

    const result = await axios.get(`http://localhost:3009/users/${id}`);
    setUser(result.data);

  }
  useEffect(() => {

    loaduser();
  },[]);


  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [editdata, setEditdata] = useState([]);
  //Edit the user data through put method 
  const onSubmit = async (e) => {
   e.preventDefault();
   console.log("666666666666666666 edit from was working");
   const updateuser= await axios.put(`http://localhost:3009/users/${id}`,user);
   setEditdata(updateuser);
   console.log("ooooooooooo",editdata)
   navigate("/");
   
  }
  return (
    <div className="container">
      <br/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"><u>Edit  User {id}</u></h2>
        <form onKeyDown={async (e) => {
              if (e.key === "Enter") await onSubmit(e)
            }}  onSubmit={ (e)=>onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)} required />
          </div>
          <br />
          <div className="form-group">
            <input type="text" className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)} required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)} required 
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)} required 
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)} required
            />
            <br />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
          <Link className="btn btn-danger  ms-1" to={"/"}>cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;