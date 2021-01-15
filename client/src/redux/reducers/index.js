import { combineReducers } from "redux";
import bucketReducer from "./bucketReducer";
import todoReducer from "./todoReducer"

//Comining Reducer
const rootreducer = combineReducers({
    buckets : bucketReducer,
    todo: todoReducer
})

export default rootreducer;