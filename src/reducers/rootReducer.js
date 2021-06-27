
import characterReducer from './characterReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: characterReducer

})

export default rootReducer