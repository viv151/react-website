import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../slices/todoSlice.js"

// Load todos from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("lists");
        if (!serializedState) return undefined;
        return JSON.parse(serializedState)
    } catch (error) {
        console.error("Could not load state", error);
        return undefined;
    }
}

// Save todos to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("lists", serializedState)
    } catch (error) {
        console.error("Could not save state", error);
    }
}


const store = configureStore({
    reducer: todoSliceReducer,
    preloadedState: loadState()
})


// Subscribe to store changes
store.subscribe(() => {
    saveState(store.getState())
})

export default store