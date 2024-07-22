import { Dialog, DialogPanel } from '@headlessui/react'
import React, { useState } from 'react'

export default function UsernameModalTitle() {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [username, setUsername] = useState('')

    const handleUsernameSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        setUsername(data.username)
        setIsModalOpen(false)
    }

    return (

        <>
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
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <DialogPanel className="bg-white p-6 rounded-md shadow-md">
                        <Dialog.Title className="text-2xl text-green-700 font-bold mb-4">Enter Your Name</Dialog.Title>
                        <form onSubmit={handleUsernameSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Your name"
                                className="border-2 border-gray-200 rounded-md px-4 h-10 mb-4"
                            />
                            <button type="submit" className="bg-green-700 h-10 ml-2 px-4 rounded-md text-white">
                                Submit
                            </button>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

        </>
    )
}
