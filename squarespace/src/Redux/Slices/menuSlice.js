import { createSlice, current } from "@reduxjs/toolkit";

const initialState ={
   isEditing:false,
   isSaved:false,
   isEdited:false,
   website:{
    title:{title:"Your website name",font:""},
    intro:{title:"Welcome to your website"},
    about:{buttonText:"Learn more"}
   }
   
}
const menuSlice = createSlice({
    name:"menuSlice",
    initialState,
    reducers :{
        setIsEditing:(state,action)=>{
            state.isEditing = action.payload
        },
        setIsSaved:(state,action)=>{
            state.isSaved = action.payload
        },
        setIsEdited:(state,action)=>{
            state.isEdited = action.payload
        },
        setIntroTitle:(state,action)=>{
            console.log("action.payload")
            state.website.intro.title = action.payload
        },
        setAboutButtonText:(state,action)=>{
            console.log("action.payload")
            state.website.about.buttonText = action.payload
        },
        setWebsiteTitleFont:(state,action)=>{
            state.website.title.font = action.payload
        },
        
    }
})

export const {setIsEditing,setIsEdited,setIsSaved,setIntroTitle,setAboutButtonText,setWebsiteTitleFont} = menuSlice.actions
export default menuSlice.reducer