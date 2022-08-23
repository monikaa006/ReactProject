
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useParams  } from 'react-router-dom';
import {  FaUser } from "react-icons/fa";


export default function View() {
    const initialvalues = {
        name:" ",
        username: " ",
        email: " ",
        phone: " ",
        website: " "
    };

    const [user, setUsers] = useState(initialvalues);
    
    let { id } = useParams();
    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3009/users/${id}`);
        
        setUsers(result.data);
        
    };
    useEffect(() => {
        loaduser();
    })


    return (
        <div >
            <br></br>
            <Link  style={{marginLeft:"13%"}} className='btn btn-secondary '  to={"/"}>back to home</Link><br></br>
            <br></br>
           
            <div className="w-75 mx-auto shadow p-5">
            <h2 style={{color:"darkblue"}}> <FaUser></FaUser><u>user Id {id}</u></h2>

             <ul class="list-group list-group-flush">


                <li className="list-group-item ">name:-{user.name}</li>
                <li className="list-group-item ">username:-{user.username}</li>
                <li className="list-group-item ">email:-{user.email}</li>
                <li className="list-group-item">phone:-{user.phone}</li>
                <li className="list-group-item ">website:-{user.website}</li>
             
             </ul>

            </div>
        </div>
    )
}
