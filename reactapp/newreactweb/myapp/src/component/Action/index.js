export const ADD_CART = 'ADD_CART' ;
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload:
        {
            id: new Date().getTime().toString(),
          
          }
    }
}
export function IncreaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}