import { combineReducers } from 'redux';
import { todoProduct } from './AddCart';
export const rootReducer = combineReducers({
    _todoProduct:todoProduct
});
