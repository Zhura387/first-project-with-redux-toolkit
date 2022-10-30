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
                id: new Date().toISOString(),
                text: action.payload.text,
                complited: false,
            })

            console.log(action.payload)
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
            console.log(action.payload)
        },
        toggleTodoComplited: (state, action) => {
            const toggletTodo = state.value.find(item => item.id === action.payload.id)
            toggletTodo.complited = !toggletTodo.complited
        }
    }
})

export const { addTask, deleteTask, toggleTodoComplited } = taskSlice.actions;

export default taskSlice.reducer