import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: {
    intro: { show: true, name: 'Intro section' },
    product: { show: true, name: 'Product section' },
    about: { show: true, name: 'About section' },
    footer: { show: true, name: 'Footer section' }, 
  },
};

const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    setSections: (state, action) => {
      const { sectionKey, updatedData } = action.payload;
      if (state.sections[sectionKey]) {
        state.sections[sectionKey] = { ...state.sections[sectionKey], ...updatedData };
      }
    },
    toggleSection: (state, action) => {
      const sectionKey = action.payload;
      if (state.sections[sectionKey]) {
        state.sections[sectionKey].show = !state.sections[sectionKey].show; // Toggle the 'show' property
      }
    },
  },
});

export const { setSections, toggleSection } = webSlice.actions;

export default webSlice.reducer;
