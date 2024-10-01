import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: {
    intro: { 
      show: true, 
      name: 'Intro Section',
      position: { top: 0, left: 0 },
      size: { width: 300, height: 50 }
    },
    product: { show: true, name: 'Product section' },
    about: { show: true, name: 'About section' },
    footer: { show: true, name: 'Footer section' }, 
  },
  backgroundColor: '#FFFFFF', 
  fonts: {
    headingFont: 'font-sans', 
    bodyFont: 'font-sans',
  }
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
        state.sections[sectionKey].show = !state.sections[sectionKey].show;
      }
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setFonts: (state, action) => {
      const { headingFont, bodyFont } = action.payload;
      state.fonts = { headingFont, bodyFont }; 
    },
    
    updateIntroTitle: (state, action) => {
      const newTitle = action.payload;
      if (state.sections.intro) {
        state.sections.intro.name = newTitle;
      }
    },

    updateIntroPosition: (state, action) => {
      const { top, left } = action.payload;
      if (state.sections.intro) {
        state.sections.intro.position = { top, left };
      }
    },

    updateIntroSize: (state, action) => {
      const { width, height } = action.payload;
      if (state.sections.intro) {
        state.sections.intro.size = { width, height };
      }
    }
  },
});

export const { setSections, toggleSection, setBackgroundColor, setFonts, updateIntroTitle,updateIntroPosition,updateIntroSize } = webSlice.actions;

export default webSlice.reducer;