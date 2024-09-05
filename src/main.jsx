import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import StudentForm from './components/StudentsForm.jsx'
import Dashboard from './components/Dashboard.jsx'
import AddSchool from './components/AddSchool.jsx'
import SchoolList from './components/SchoolList.jsx'
import StudentList from './components/StudentList.jsx'
import Aboutus from './components/Aboutus.jsx'
import Contactus from './components/Contactus.jsx'
import Service from './components/Service.jsx'
import Howtouse from './components/Howtouse.jsx'
import Changepassword from './components/Changepassword.jsx'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/addschool' element={<AddSchool/>}/>
      <Route path='/schoollist' element={<SchoolList/>}/>
      <Route path='/addStudent' element={<StudentForm/>}/>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/howtouse' element={<Howtouse/>}/>
      <Route path='/changepassword' element={<Changepassword/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
