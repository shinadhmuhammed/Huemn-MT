import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pages: ["", "homepage", "colors", "fonts"],
    currentPage: ["siteinfo", "homepage", "colors", "fonts"],
    currentPageIndex: 0,
    isSectionSelected: false, 
};

const workFlowSlice = createSlice({
    name: "pageSlice",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        clearCurrentPage: (state) => {
            state.currentPage = [];
        },
        setCurrentPageIndex: (state, action) => {
            state.currentPageIndex = action.payload;
        },
        nextPage: (state) => {
            if (state.currentPageIndex < 4) {
                state.currentPageIndex += 1;
            }
        },
        prevPage: (state) => {
            if (state.currentPageIndex > 0) {
                state.currentPageIndex -= 1;
            }
        },
        setSectionSelected: (state, action) => {
            state.isSectionSelected = action.payload;
        },
    },
});

export const { setCurrentPage, clearCurrentPage, nextPage, prevPage, setSectionSelected } = workFlowSlice.actions;
export default workFlowSlice.reducer;
