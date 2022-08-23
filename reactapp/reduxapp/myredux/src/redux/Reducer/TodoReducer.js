//import { AddTodo } from "../Action/ActionsTypes"

const initialData={
   
    list:[],
    isEditing:false
    
}
    
    
 const TodoReducer =  (state=initialData,action)=>{
    switch(action.type){
        case 'ADD_TODO':
           const {id , data}= action.payload;
           return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                 data:data   

                }
            ],
            isEditing:false
           }
           case 'DELETE_TODO':
          const newlist= state.list.filter((element)=>element.id!==action.id)
            return{
             ...state,
             list:newlist,
             isEditing:false

            }
           
            
            case 'REMOVE_TODO':
            return{
             ...state,
             list:[],
             isEditing:false
            }

        default: return state;
    }
    

}

export default TodoReducer;