import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { FaSearch, FaSortDown, FaSortUp, FaUser } from "react-icons/fa";
import Pagination from './actions/Pagination';


export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [UserperPage] = useState(4);
  const [order, setorder] = useState("FaSortDown");
  
  useEffect(() => {

    loaduser();
  }, [])


  const loaduser = async () => {
    const result = await axios.get('http://localhost:3009/users');

    setUsers(result.data)
  };
  //delete a user details
  const handleDelete = async id => {
    await axios.delete(`http://localhost:3009/users/${id}`)
    loaduser();
  }
  //search users by name


  const searchusers = async (e) => {
    e.preventDefault();
    return  await axios.get(`http://localhost:3009/users/?q=${search}`)
    .then(response => {
      setUsers(response.data);
      setSearch("");
      //console.log("99999999999",search);
    })
    .catch((err) => console.log("error", err));   
  }
 
  
  
  //sorting clicked by head
  const handleSorting = async (col) => {

    // console.log("Asending data", col);
    if (order === 'FaSortDown') {
      
      console.log("hii")
      let sortedItem = [...users].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1);
      setUsers(sortedItem);
      setorder("FaSortUp");

    }
    if (order === 'FaSortUp') {
     
      console.log("hii")
      let sortedItem = [...users].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1);
      setUsers(sortedItem);
      setorder("FaSortDown");

    }

  }

  function onreset() {
    loaduser();
  }
  
  
  //pagination
  const indexOfLastUser = currentpage * UserperPage;
  const indexOfFirstUser = indexOfLastUser - UserperPage;
  const currentUser =  users.slice(indexOfFirstUser, indexOfLastUser);
  console.log(users, "-----");
  const totalNum =Math.ceil(users.length / UserperPage);

  return (
    <div>
      <div className='container'>
        <br />

        <br />
        <h1 className='container ms-2' style={{ textAlign: "center", color: "black" }} > <FaUser />  <u>User Information</u></h1>
        <br />
        <div style={{ display: "inline", }} className="comtainer ">

          <Link className='btn btn-primary btn-sm' to={"/Create"}>Add user</Link>
          <div style={{ display: "inline", marginLeft: "60%" }}>
            <input onKeyDown={async (e) => {
              if (e.key === "Enter") await searchusers(e)
            }} type="text" id='form1' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search by name" ></input>
            <button className='bt btn-secondary'>  <FaSearch onClick={(e) => searchusers(e)} className='bi bi-search' /></button>
            <button type="button" onClick={() => onreset()} className="btn btn-danger btn-sm ms-2">Reset</button>


          </div>

        </div>


        <br /><br />
        <div className='table-responsive-lg '>
          <table className="table border shadow  table-bordered  border-primary">
            <thead className="table-light table-bordered  border-primary ">
              <tr >
                <th scope='col' >UserId</th>
                <th scope='col' onClick={(e) => handleSorting("name")}>Name
                  {order === "FaSortDown" ? <FaSortDown /> : <FaSortUp />}
                </th>

                <th scope='col' onClick={(e) => handleSorting("username")} >UserName
                  {order === "FaSortDown" ? <FaSortDown /> : <FaSortUp />}
                </th>
                <th scope='col' onClick={(e) => handleSorting("email")}>Email
                  {order === "FaSortDown" ? <FaSortDown /> : <FaSortUp />}
                </th>
                <th scope='col'> Actions   </th>

              </tr>
            </thead>
            <tbody>
              {
                currentUser && currentUser.length > 0 ?
                  currentUser.map((user, index) => (

                    <tr key={user.id}>

                      <td>{user.id}</td>
                      <td > {user.name}</td>
                      <td > {user.username}</td>
                      <td >{user.email}</td>

                      <td>
                        <Link type="submit" className="btn btn-danger" onClick={() => handleDelete(user.id)} to="/">Delete</Link>
                        <Link type="submit" className="btn btn-warning ms-1" to={`/View/${user.id}`}>
                          view</Link>
                        <Link type="submit" className="btn btn-success ms-1 " to={`/Edit/${user.id}`} >Edit</Link>
                      </td>
                    </tr>

                  ))
                  :  " Data Not Found"
              }


            </tbody>
          </table>
          <br></br>

          <Pagination pages={totalNum}
            setCurrentpage={setCurrentpage}
            searchdata={search}


          />
          <br></br>

        </div>
      </div>


    </div>
  )
}

