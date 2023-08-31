import { createSlice } from "@reduxjs/toolkit";



const GptSclice = createSlice({
    name:"gpt",
    initialState:{
        toogleGPT: false
    },
    reducers:{
        toogleGPTView: (state) => {
            state.toogleGPT = !state.toogleGPT;
        }
    }
})


export default GptSclice.reducer;

export const { toogleGPTView } =GptSclice.actions; 