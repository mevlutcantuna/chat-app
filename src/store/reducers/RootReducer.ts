import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  firebase: firebaseReducer,
});

export default RootReducer;
