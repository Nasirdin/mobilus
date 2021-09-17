import {combineReducers} from "redux";
import accessory from './mobilusReducer';

const rootReducer = () => combineReducers({accessory});

export default rootReducer;