import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "todo msg",
            completed: false,
        }
    ],
    addToDo: (title) => {},   
    updateToDo: (id , title) => {},   
    deleteToDo: (id) => {},   
    ToggleComplete: (id) => {},   
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 

