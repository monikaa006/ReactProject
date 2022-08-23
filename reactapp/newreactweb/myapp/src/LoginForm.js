/*import React, {  useState } from 'react'
import { useNavigate } from "react-router-dom";
function LoginForm() {
    let navigate = useNavigate();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    var userdata=localStorage.getItem('userdata');
   





      const login = (e) => {
        e.preventDefault();
     
     
      if (userdata==null) {
        
        alert("no user find please sign up first")
        navigate("/SignUpForm")

      }
    }
     
    
    
     
     
  return (
    <div>
       <br></br>

 
      <div style={{ textAlign: 'center' }}>
        <h1> USER LOGIN </h1>
     
          <>
            <form action="">
             
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              /><br/><br/>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              /><br/><br/>
              <button className='btn btn-primary' type="submit" onClick={login}>
                log in
              </button>

            </form>

          </>
        
      </div>
   
 

      
    </div>
  )
}

export default LoginForm
*/



import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

   
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userdata");
        console.log(getuserArr);

        const { email, password } = inpval;

       if (getuserArr==null) {
        
        alert("no user find please sign up first")
       // navigate("/SignUpForm")

      } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
            
                const data= inpval;
                console.log(userdata)
                const userlogin = data.filter((el) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfully");
                    
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    
                </section>
               
            </div>
        </>
    )
}

export default Login