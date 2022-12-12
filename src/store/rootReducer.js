import { combineReducers } from "redux";
import { drinkCardReducers } from "../storeContant/Reducer";



const rootReducers = combineReducers({
  
  reducer : drinkCardReducers,

    
});

export default rootReducers;
