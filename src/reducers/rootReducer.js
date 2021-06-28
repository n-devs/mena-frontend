
import inputReducer from './inputReducer';
import buttonReducer from './buttonReducer';
import { combineReducers } from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    inputs: inputReducer,
    buttons: buttonReducer,
})

export default rootReducer