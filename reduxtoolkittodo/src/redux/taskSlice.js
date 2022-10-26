import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.value.push({
                text: action.payload.text,
            })

            console.log(action.payload)
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter((item) => item.text !== action.payload.text)
            console.log(action.payload)
        }
    }
})

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer