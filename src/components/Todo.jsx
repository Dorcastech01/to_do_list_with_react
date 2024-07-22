import { useState } from 'react'
import UsernameModalTitle from './UsernameModalTitle'
import TodoForm from './TodoForm'
import TodoProvider from './TodoProvider'
import TodoList from './TodoList'

export default function ToDo() {

  return (
    <TodoProvider>
      <div className="bg-white">

        <div className="relative isolate px-6 pt-14 lg:px-8">

          <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-32">
            <UsernameModalTitle />

            <TodoForm />

            <TodoList />
          </div>
        </div>
      </div>

    </TodoProvider>
  )
} 
