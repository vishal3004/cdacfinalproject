import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateStudent from '../Institute/CreateStudent'
import InstituteHome from '../Institute/InstituteHome'
import InstituteProfile from '../Institute/InstituteProfile'
import InterestedCompnies from '../Institute/InterestedCompnies'
import JobDisplay from '../Institute/JobDisplay'
import JobView from '../Institute/JobView'
import ViewStudent from '../Institute/ViewStudent'
import Blog from '../pages/Blog'

import Career from '../pages/Career'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import ClgInterested from '../recruiter/ClgInterested'
import InterestedClgs from '../recruiter/InterestedClgs'
import JobDisplay1 from '../recruiter/JobDisplay1'
import PostJob from '../recruiter/PostJob'
import RecruiterHome from '../recruiter/RecruiterHome'
import ViewStudents from '../recruiter/ViewStudents'
import JobDisplayStd from '../Student/JobDisplayStd'
import JobViewStd from '../Student/JobViewStd'
import StudentHome from '../Student/StudentHome'


import Academicinfo from '../StudentLog/Academicinfo'
import CreateResume from '../StudentLog/CreateResume'
import ExtraActivities from '../StudentLog/ExtraActivities'
import HomeResume from '../StudentLog/Home'
import Personainfo from '../StudentLog/Personainfo'
import ProjDetails from '../StudentLog/ProjDetails'
import Skills from '../StudentLog/Skills'
import ViewResume from '../StudentLog/ViewResume'


export default function RoutePage() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path='/institutehome' element={<InstituteHome/>} />
        <Route path='/institutehome/createstudent' element={<CreateStudent/>} />
        <Route path='/institutehome/jobdisplay' element={<JobDisplay/>} />
        <Route path='/institutehome/jobdisplay/:id' element={<JobView/>} />
        <Route path='/institutehome/viewstudent' element={<ViewStudent/>} />
        <Route path='/institutehome/interestedcompanies' element={<InterestedCompnies/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/instituteprofile' element={<InstituteProfile/>} />
        <Route path='/recruiterhome' element={<RecruiterHome/>} />
        <Route path='/recruiterhome/postjob' element={<PostJob/>} />
        <Route path='/recruiterhome/viewjob' element={<JobDisplay1/>} />
        {/* <Route path='/recruiterhome/interestedClgs' element={<InterestedClgs/>} /> */}
        <Route path='/recruiterhome/interestedClgs' element={<ClgInterested/>} />
        <Route path='/recruiterhome/interestedClgs/students/:clgName/:id' element={<ViewStudents/>} />
        <Route path='/studenthome/jobdisplay' element={<JobDisplayStd/>} />
        <Route path='/studenthome/jobdisplay/:id' element={<JobViewStd/>} />

        <Route path='/studenthome/resume' element={<CreateResume/>} />
        <Route path='/viewresume/:id' element={<ViewResume/>} />
       
        <Route path='/studenthome' element={<StudentHome/>} />
        <Route path='/createresume' element={<HomeResume/>}>
        <Route path='/createresume/Personaldetail' element={<Personainfo/>} />
        <Route path='/createresume/Academicdetails' element={<Academicinfo/>} />
        <Route path='/createresume/ProjectDetails' element={<ProjDetails/>} />
        <Route path='/createresume/Skills' element={<Skills/>}  />
        <Route path='/createresume/ExtraActivities' element={<ExtraActivities/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
