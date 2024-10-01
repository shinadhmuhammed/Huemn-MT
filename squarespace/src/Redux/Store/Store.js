import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import siteSlice from "../Slices/SiteSlice";
import workflowSlice from "../Slices/workflowSlice";
import webSlice from "../Slices/webSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["web"],
};

const rootReducer = combineReducers({
  site: siteSlice,
  pageSlice: workflowSlice,
  web: webSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
