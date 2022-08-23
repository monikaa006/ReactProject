import {ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY} from  '../Action';

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

  export function todoProduct(state = initProduct,action){
    switch(action.type){
        
        case ADD_CART:
            
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            
        default:
            return state;
    }
}