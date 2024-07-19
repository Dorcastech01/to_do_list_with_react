import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

export default function ToDo() {
  const [username, setUsername] = useState('')
  const [usernameInput, setUsernameInput] = useState('')
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const handleUsernameSubmit = (e) => {
    e.preventDefault()
    setUsername(usernameInput)
    setIsModalOpen(false)
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault()
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }])
      setTaskInput('')
    }
  }

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ))
    setTasks(newTasks)
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hello <span className='text-green-700'>
              {username ? username : ''} 
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              What do you want to do today?
            </p>
          </div>

          <form onSubmit={handleTaskSubmit} className="flex justify-center mt-6">
            <input 
              type="text" 
              placeholder="Add a new task" 
              value={taskInput} 
              onChange={(e) => setTaskInput(e.target.value)} 
              className="border-2 border-gray-200 px-4 h-10 mr-2 rounded-md"
            />
            <button type="submit" className="bg-green-700 h-10 px-4 rounded-md text-white">
              Add
            </button>
          </form>

          <ul className="mt-12">
            {tasks.map((task, index) => (
              <li key={index} className={`flex justify-between items-center mt-6 p-2 border-b ${task.completed ? 'line-through' : ''}`}>
                <span>{task.text}</span>
                <div >
                  <button onClick={() => toggleTaskCompletion(index)} className="mr-4 text-green-700">
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => removeTask(index)} className="text-red-500 w-24 border border-red-500 rounded-md">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <DialogPanel className="bg-white p-6 rounded-md shadow-md">
            <Dialog.Title className="text-2xl text-green-700 font-bold mb-4">Enter Your Name</Dialog.Title>
            <form onSubmit={handleUsernameSubmit}>
              <input 
                type="text" 
                placeholder="Your name" 
                value={usernameInput} 
                onChange={(e) => setUsernameInput(e.target.value)} 
                className="border-2 border-gray-200 rounded-md px-4 h-10 mb-4"
              />
              <button type="submit" className="bg-green-700 h-10 ml-2 px-4 rounded-md text-white">
                Submit
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
