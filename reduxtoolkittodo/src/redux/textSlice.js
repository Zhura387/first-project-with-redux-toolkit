import{createSlice} from '@reduxjs/toolkit'

const initialState={
    value:'',
}

export const textSlice =createSlice({
    name:'text',
    initialState,
    reducers:{
        addText:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {addText} =textSlice.actions;

export default textSlice.reducer