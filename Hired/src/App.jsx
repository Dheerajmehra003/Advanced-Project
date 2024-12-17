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
import ProtectedRoute from './components/ProtectedRoute'

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
          element: (
            <ProtectedRoute>
            <Onboarding/>
            </ProtectedRoute>

          ),
        },
        {
          path:'/jobs',
          element:
          (
            <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
          ),
        },
        {
          path:'/job/:id',
          element:
          (
            <ProtectedRoute>
            <Job />
            </ProtectedRoute>
          ),
        },
        {
          path:'/post-job',
          element:
          (
            <ProtectedRoute>
            <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path:'/save-job',
          element:
          (
            <ProtectedRoute>
            <SaveJob />
            </ProtectedRoute>
          ),
        },
        {
          path:'/my-job',
          element:
          (
            <ProtectedRoute>
            <MyJob />
            </ProtectedRoute>
          ),
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