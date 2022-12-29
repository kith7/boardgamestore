import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
//every store nededs reducers a root reducer
//to keep it clean we may create a separate file for our root reducer
const middleWares = [logger];
const componseEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, componseEnhancers);
