import { createContext, useState } from "react";

export const TodoContext = createContext({
    tasks: [],
    setTasks: (allTasks) => { }
})


export default function TodoProvider({ children }) {

    const [tasks, setTasks] = useState([])

    return (
        <TodoContext.Provider value={{tasks, setTasks}}>
            {children}
        </TodoContext.Provider>
    )
}