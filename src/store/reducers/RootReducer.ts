import { combineReducers } from "redux";
import CurrentPage from "./CurrentPage";
import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  firebase: firebaseReducer,
  CurrentPage,
});

export default RootReducer;
