import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'

export default function TodoForm() {

    const {setTasks, tasks} = useContext(TodoContext)

    const handleTaskSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        if (data.todo_text.trim()) {
            setTasks(currentTasks => ([...currentTasks, {id:tasks.length + 1,  text: data.todo_text, completed: false }]))
        }
    }

    return (
        <form onSubmit={handleTaskSubmit} className="flex justify-center mt-6">
            <input
                type="text"
                placeholder="Add a new task"
                name="todo_text"
                className="border-2 border-gray-200 px-4 h-10 mr-2 rounded-md"
            />
            <button type="submit" className="bg-green-700 h-10 px-4 rounded-md text-white">
                Add
            </button>
        </form>
    )
}
