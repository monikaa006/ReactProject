import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
  
    
      const login = (e) => {
        e.preventDefault();
       // console.log( email, password);
        const userData = {
         name,
          email,
          password,
        };
        localStorage.setItem('userdata', JSON.stringify(userData));
       
        setName('');
        setEmail('');
        setPassword('');
        navigate("/LoginForm");

      };
  return (
    <div>
        <br></br>
      <div style={{textAlign:'center',backgroundColor:'lightgrey' }} className="w-50 mx-auto shadow p-5"> 
       <form onKeyDown={async (e) => {
              if (e.key === "Enter") await login(e)
            }}  onSubmit={ (e)=>login(e)}>
        <h3 style={{textAlign:'center'}}><u>Sign Up</u></h3><br/>
        <div  className="mb-3">
          <label className='col-sm-2 col-form-label'>Username</label>
         <input
           
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              /><br/><br/>
        </div>
        <div className="mb-3">
          <label className='col-sm-2 col-form-label'>Email </label>
          <input
          
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              /><br/><br/>
        </div>
        <div className="mb-3">
          <label className='col-sm-2 col-form-label'>Password</label>
          <input
         
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              /><br/><br/>
        </div>
       
        <div >
         
          <button className='btn btn-primary' type="submit" onClick={login}>
                sign up
              </button>

        </div>
        
      </form>
    </div>
    </div>
  )
}

export default SignUpForm
