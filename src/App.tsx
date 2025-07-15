import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <MainLayout />, children: [
      {path: '/', element: <Home />},
      {path: '/signup', element: <Signup />},
      {path: '/signin', element: <Signin />}
    ]}
  ])

  return <RouterProvider router={router} />
}

export default App
