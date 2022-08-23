
import React from 'react'
import './App.css';
import Home from './curds/component/Home'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './curds/component/Create'
import Edit from './curds/component/actions/Edit'
import View from './curds/component/actions/View'
import About from './curds/component/About'
import Notfound from './curds/component/Notfound'
import Navbar from './curds/component/Navbar'

function App() {
  return (
    <div >
      <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>

            <Route exact path='/' element={<Home />} />

           
            <Route path='/View/:id' element={<View />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/about' element={<About/>} />
            <Route path='/Edit/:id' element={<Edit />} />
            <Route exact path='*' element={<Notfound />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
