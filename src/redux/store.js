import {createStore} from "redux";
import reducer from "./reducers/basketReducer";





const store = createStore(reducer)


export default store;