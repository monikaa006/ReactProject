import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ImageSlider from './ImageSlider';



import Navbar from './Navbar'


function Home() {
  let navigate = useNavigate();
  const Menu = () => {

    navigate('/AdminView')
  }
  return (
    <div style={{ backgroundColor:'lightgray' }}> 
      <br />
      <Navbar />
      <FaBars onClick={Menu}></FaBars>

      <h2 style={{ textAlign: "center" }}>welcome to Fashion Factory</h2>
      <p class="container">
        Fashion refers to anything that becomes a rage among the masses. Fashion is a popular aesthetic expression. Most Noteworthy, it is something that is in vogue. Fashion appears in clothing, footwear, accessories, makeup, hairstyles, lifestyle, and body proportions.
      </p>
      <div className='container'>
        <ImageSlider /></div>
      <br /><br />


    </div>
  )
}

export default Home
