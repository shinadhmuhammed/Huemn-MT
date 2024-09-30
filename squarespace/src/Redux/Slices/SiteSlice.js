import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  title: 'Your site title',
  fontStyle: 'normal',
  personalityStyles: {
    professional: { fontFamily: 'Arial, sans-serif', fontWeight: 'bold' },
    playful: { fontFamily: 'Comic Sans MS, cursive', fontWeight: 'normal' },
    sophisticated: { fontFamily: 'Georgia, serif', fontWeight: 'lighter' },
    friendly: { fontFamily: 'Verdana, sans-serif', fontWeight: 'normal' },
    bold: { fontFamily: 'Impact, sans-serif', fontWeight: 'bold' },
    quirky: { fontFamily: '"Courier New", monospace', fontWeight: 'normal', fontStyle: 'italic' },
  },
};


const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setFontStyle: (state, action) => {
      state.fontStyle = action.payload;
    },
  },
});


export const { setTitle, setFontStyle } = siteSlice.actions;
export default siteSlice.reducer;  
