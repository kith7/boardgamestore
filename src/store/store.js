import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
//every store nededs reducers a root reducer
//to keep it clean we may create a separate file for our root reducer

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [process.env.NOD_ENV === "development" && logger].filter(
//   Boolean
// );
const middleWares = [logger, thunk];

const componseEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  componseEnhancers
);

export const persistor = persistStore(store);
