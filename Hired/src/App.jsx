import React from 'react'
import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './Pages/LandingPage'
import JobListing from '@/Pages/JobListing'
import Job from '@/Pages/Job'
import PostJob from '@/Pages/PostJob'
import SaveJob from '@/Pages/SaveJob'
import MyJob from '@/Pages/MyJob'
import './App.css'
import { ThemeProvider } from './components/ui/Theme-Provider'
import Onboarding from './Pages/Onboarding'

const router = createBrowserRouter([
  {
  element: <AppLayout />,
  children: [
        {
          path:'/',
          element: <LandingPage />
        },
        {
          path:'/onboarding',
          element: <Onboarding/>
        },
        {
          path:'/jobs',
          element: <JobListing />
        },
        {
          path:'/job/:id',
          element: <Job />
        },
        {
          path:'/post-job',
          element: <PostJob />
        },
        {
          path:'/save-job',
          element: <SaveJob />
        },
        {
          path:'/my-job',
          element: <MyJob />
        },
      ]
  }
])


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App