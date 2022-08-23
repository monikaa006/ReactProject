

import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Language from './component/Language';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/Language'  element={<Language/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
