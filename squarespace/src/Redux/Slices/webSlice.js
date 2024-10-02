import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: {
    intro: {
      show: true,
      name: "Intro Section",
      position: { x: 0, y: 0 },
    },
    product: { show: true, name: "Product section", position: { x: 0, y: 0 } },
    about: { show: true, name: "About section", position: { x: 0, y: 0 } },
    footer: { show: true, name: "Footer section" },
  },
  backgroundColor: "#FFFFFF",
  fonts: {
    headingFont: "font-sans",
    bodyFont: "font-sans",
  },
};

const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    setSections: (state, action) => {
      const { sectionKey, updatedData } = action.payload;
      if (state.sections[sectionKey]) {
        state.sections[sectionKey] = {
          ...state.sections[sectionKey],
          ...updatedData,
        };
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
      const { position } = action.payload;
      state.sections.intro.position = position;
    },

    updateProductPosition: (state, action) => {
      const { position } = action.payload;
      state.sections.product.position = position; 
    },
  },
});

export const {
  setSections,
  toggleSection,
  setBackgroundColor,
  setFonts,
  updateIntroTitle,
  updateIntroPosition,
  updateProductPosition
} = webSlice.actions;

export default webSlice.reducer;
