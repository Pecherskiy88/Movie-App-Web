import { combineReducers } from "redux";
import fetchData from "../reducer/fetchReducer";

const rootReducer = combineReducers({
  fetchData
});

export default rootReducer;
