import Header from '@/components/ui/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen px-10 '>
        <Header />
       <Outlet />
      </main>
      <div className='p-7 text-center bg-gray-800 mt-10'>
        Made by Dheeeraj mehra
      </div>
    </div>
  )
}

export default AppLayout