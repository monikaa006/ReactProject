import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router';
function Language() {
   
  const [ language, setlanguage]=useState()
  const { id } = useParams()
  const loaduser = async () => {

    const result = await axios.get(`http://192.168.1.93:8085/showAllLanguage`)
    console.log(result.data);

  }

  useEffect(() => {

    loaduser();
  },[]);
  return (
    <div>
       <h1>hello  language</h1> 



      
    </div>
  )
}

export default Language
