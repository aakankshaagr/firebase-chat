/*Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.*/
/*import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
*/
import { createStore } from "redux";
import rootReducer from "./reducer/index";
const store = createStore(rootReducer);
export default store;
