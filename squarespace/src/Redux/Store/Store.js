import { configureStore } from '@reduxjs/toolkit';

import siteSlice from '../Slices/siteSlice';
import workflowSlice from '../Slices/workflowSlice';
import webSlice from '../Slices/webSlice';

const store = configureStore({
  reducer: {
    site: siteSlice,
    pageSlice: workflowSlice,
    web: webSlice, 
  },
});
export default store;
