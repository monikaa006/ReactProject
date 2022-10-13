import React, { useState, useEffect } from 'react'



function Pagination({ pages, setCurrentpage, searchdata }) {
  const [button, setButton] = useState(1);
 let reset=true;
  // console.log(reset,"opoiopoio")/
  const numOfPage = [];

  
  for (let i = 1; i <= pages; i++) {
    numOfPage.push(i);

    if (searchdata === '') {
      console.log("search is work")
      setCurrentpage(1);

      searchdata =" ";

    }
  
  
    else if (reset === true) {
      console.log("onreset is work")
      setCurrentpage(button);
      reset = false;
    }
   

  }
  //console.log(numOfPage, " ----num of page");




  useEffect(() => {

    setCurrentpage(button);

    //console.log("78909876789");
  }, [button, setCurrentpage])


  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination ms-2">
          <li className={`${button === 1 ? 'page-item disabled' : 'page-item'}`}><a className="page-link" href='#!'
            onClick={() => setButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a></li>
          {
            numOfPage.map((pages, index) => {
              return (
                <li key={index} className={`${button === pages ? 'page-item active' : 'page-item'}`}><a className="page-link" href='#!'
                  onClick={() => setButton(pages)}
                >{pages}</a></li>)
            })
          }


          <li className={`${button === numOfPage.length ? 'page-item disabled' : 'page-item'}`}><a className="page-link" href='#!'
            onClick={() => setButton((next) => next === numOfPage.length ? next : next + 1)} >Next</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;

/*<li className="page-item"><a className="page-link" href="/">Previous</a></li>
<li className="page-item"><a className="page-link" href="/">1</a></li>
<li className="page-item"><a className="page-link" href="/">2</a></li>
<li className="page-item"><a className="page-link" href="/">3</a></li>
<li className="page-item"><a className="page-link" href="/">Next</a></li>
const pagination =()=>{
    
    if (currentpage===0) {
      <ul className='pagination'>
      <li className='page-item' >
   <a>1</a>
      </li>
      <li className='page-item' >
      <a className="page-link" href="#!"
  onClick={ () => loaduser(8,4,1)}>Next</a>
      </li>

      </ul>
      
    } else {
       <h1>then</h1>
    }

  }
 {
            numOfPage.map((pages, index) => {
              return (
                <li key={index} className={`${button === pages ? 'page-item active' : 'page-item'}`}><a className="page-link" href='#!'
                  onClick={() => setButton(pages)}
                >{pages}</a></li>)
            })
          }


           return await axios.get(`http://localhost:3009/users/?name=${search}`)
      .then(response => {
        setUsers(response.data);
        setSearch("");
      })
      .catch((err) => console.log("error", err));
  let filterUser=users.filter((user)=>user.name.toLowerCase().includes(search) )
 search.length>0?filterUser.slice(indexOfFirstUser, indexOfLastUser):
 search.length>0?Math.ceil(filterUser.length/UserperPage):
  if (search.length > 0) {
    users.filter((user) => {
    return user.name.match(search);
});
}
await axios.get(`http://localhost:3009/users/?name=${search}`)
      .then(response => {
        setUsers(response.data);
        setSearch("");
        //console.log("99999999999",search);
      })
      .catch((err) => console.log("error", err));


*/