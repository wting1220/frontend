import { createStore } from "redux";
import reducer from "./reducer";

const composeEnhancers =
(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer /* preloadedState, */, composeEnhancers);
/* eslint-enable */

export default store;
