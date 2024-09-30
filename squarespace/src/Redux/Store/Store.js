import { configureStore } from '@reduxjs/toolkit';
import siteReducer from '../Slices/siteSlice';
import workflowReducer from '../Slices/workflowSlice';
import webReducer from '../Slices/webSlice';

const store = configureStore({
  reducer: {
    site: siteReducer,
    pageSlice: workflowReducer,
    web: webReducer, 
  },
});
export default store;
