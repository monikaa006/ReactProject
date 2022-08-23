import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from '../redux/Action/Index.js'
import { FaCut, FaPlus } from "react-icons/fa";

function Todo() {
    const [InputData, setInputData] = useState(" ")
    const list = useSelector((state) => state.TodoReducer.list)
    const dispatch = useDispatch()
    return (
        <div className='container' style={{ backgroundColor: 'transprent' }}>
            <div >
                <h2 style={{ color: "white" }}>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..."
                    value={InputData} onChange={(e) => setInputData(e.target.value)}
                ></input>

               <button className='ms-2'> <FaPlus onClick={() => dispatch(addTodo(InputData),
                    setInputData(" "))} style={{fontSize:"25px",color:"blue"}}  ></FaPlus></button>

             <br/><br/>
                <div className='show-item' >
                    {
                        list.map((element) => {
                            return (
                                <div key={element.id} >

                                    <h5 style={{ color: "white" }}>{element.data}
                                        <FaCut onClick={() => dispatch(deleteTodo(element.id))} className=" ms-2" style={{ color: "red" }}></FaCut></h5>

                                </div>)

                        })
                    }

                </div>
                <br></br>
                <div className='remove-item'>
                    <div>
                        <button onClick={() => dispatch(removeTodo())} className='btn btn-danger' >Remove All</button>
                    </div>

   <br/>
                </div>
            </div>
        </div>
    )
}

export default Todo
