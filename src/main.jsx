import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Story from './home/stories/Story.jsx';

const router= createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:length',
      element:<Story/>
    }
  ]
);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)