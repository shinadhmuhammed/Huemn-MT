import { createSlice} from "@reduxjs/toolkit";
const initialState ={
    pages : ["","homepage","colors","fonts"],
    currentPage : ["siteinfo","homepage","colors","fonts"],
    currentPageIndex : 0
}
const workFlowSlice = createSlice({
    name:"pageSlice",
    initialState,
    reducers :{
        setCurrentPage:(state,action)=>{
            state.currentPage = action.payload
        },
        clearCurrentPage:(state,action)=>{
            state.currentPage = []
        },
        setCurrentPageIndex:(state,action)=>{
            state.currentPageIndex = action.payload
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
    }
})

export const {setCurrentPage,clearCurrentPage , nextPage,prevPage} = workFlowSlice.actions
export default workFlowSlice.reducer