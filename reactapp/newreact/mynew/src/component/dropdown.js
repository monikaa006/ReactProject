import Dropdown from 'react-bootstrap/Dropdown';
import React ,{useState,useEffect} from 'react'
function DropdownUse() {
    const [ language, setlanguage]=useState();
    // useEffect(() => {
    //    const data= fetch('http://192.168.1.93:8085/showAllLanguage')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //        })    
    //     }, []);


        const data= fetch('http://192.168.1.93:8085/showAllLanguage')
        .then(response => response.json())
        .then(data => {
            console.log(data)
           })    
   
  console.log(data.id)
   

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
    

      <Dropdown.Menu>
        <Dropdown.Item href="/Language">{data.language}</Dropdown.Item>
        <Dropdown.Item href="/Language">{data.language}</Dropdown.Item>
        <Dropdown.Item href="/Language">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownUse;