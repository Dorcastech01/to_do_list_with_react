import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'

function TodoItem({ task }) {
    const {tasks, setTasks} = useContext(TodoContext)

    const toggleTaskCompletion = () => {
        const newTasks = tasks.map((taskItem, i) => (
            taskItem.id === task.id ? { ...task, completed: !task.completed } : task
        ))
        setTasks(newTasks)
    }

    const removeTask = () => {
        const newTasks = tasks.filter((taskItem, i) => taskItem.id !== task.id)
        setTasks(newTasks)
    }

    return (
        <li className={`flex justify-between items-center mt-6 p-2 border-b ${task.completed ? 'line-through' : ''}`}>
            <span>{task.text}</span>
            <div >
                <button onClick={toggleTaskCompletion} className="mr-4 text-green-700">
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={removeTask} className="text-red-500 w-24 border border-red-500 rounded-md">
                    Remove
                </button>
            </div>
        </li>
    )
}


export default function TodoList() {
    const {tasks} = useContext(TodoContext)
    return (
        <ul className="mt-12">
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </ul>
    )
}
