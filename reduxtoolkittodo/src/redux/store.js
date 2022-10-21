import {configureStore}from '@reduxjs/toolkit'
import textSlice from './textSlice'
import taskSlice from './taskSlice'

export const store = configureStore({

    reducer:{
        text:textSlice,
        task:taskSlice,
    }
})