import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    lists: [
        {
            id: 1,
            listName: "List 1",
            listDesc: "List 1 desc",
            listItems: [
                {
                    message: "Todo message 1",
                    completed: false,
                    todoId: 1
                }
            ]
        }
    ]
}

const todoSlice = createSlice(
    {
        name: "todoListSlice",
        initialState,
        reducers: {
            addList: (state, action) => {
                const id = nanoid();
                const newList = { id, ...action.payload, listItems: [] }
                state.lists.push(newList)
            },

            removeList: (state, action) => {
                // console.log(action.payload)
                state.lists = state.lists.filter((list) => list.id !== action.payload)
            },

            addTask: (state, action) => {
                const id = nanoid();
                const list = state.lists.find((list) => list.id === action.payload.id)
                const newTask = { todoId: id, message: action.payload.message, completed: false }
                list.listItems.push(newTask)
                console.log(newTask)
            }
        }
    }
)

export const { addList, removeList, addTask } = todoSlice.actions


export default todoSlice.reducer;