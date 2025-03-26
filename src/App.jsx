import { useState } from 'react'
import './App.css'
import CoursesList from './pages/CoursesList'
import CoursesCart from './pages/CoursesCart'
import SignUp from './pages/SignUp'
import NavBar from './componnents/NavBar'
import Router from './componnents/Router'
import AddCourse from './pages/AddCourse'

function App() {


  return (
    <>
    <NavBar/>
    <Router/>
    </>
  )
}
//החלקים המוסלשים בקומפוננטות coursrsList & oneCourse  gpt הם החלקים שאני כתבתי החלקים הפעילים הם של 
export default App
