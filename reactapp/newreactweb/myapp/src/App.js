
import React from 'react'
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Form from './SignUpForm';

import Home from './component/Home';
import Notfound from './component/Notfound';

import Prodocts from './component/Prodocts';
import AddProduct from './component/AddProduct';
import About from './component/About';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ViewProdocts from './component/ViewProduct';

import EditProduct from './component/Edit';
import AdminView from './component/AdminView';

function App() {
  return (
    <div   >
      <BrowserRouter>
        <div>
       
          <Routes>
            <Route exact path='/Form' element={<Form/>}/>
           <Route exact path='/'  element={<Home/>}/>
           <Route exact path='/About'  element={<About/>}/>
           <Route exact path='/LoginForm'  element={<LoginForm/>}/>
           <Route exact path='/SignUpForm'  element={<SignUpForm/>}/>
           <Route exact path='/ViewProducts'  element={<ViewProdocts/>}/>
        
           <Route exact path='/AdminView'  element={<AdminView/>}/>
           <Route exact path='/Products'  element={<Prodocts/>}/>
           <Route exact path='/Edit/:id'  element={<EditProduct/>}/>
           <Route exact path='/AddProduct'  element={<AddProduct/>}/>
            <Route exact path='*' element={<Notfound/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

