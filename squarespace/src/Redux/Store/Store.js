import { configureStore } from '@reduxjs/toolkit';
import siteReducer from '../Slices/siteSlice';
import workflowReducer from '../Slices/workflowSlice';


const store = configureStore({
  reducer: {
    site: siteReducer,  
    pageSlice: workflowReducer,
  },
});

export default store;
