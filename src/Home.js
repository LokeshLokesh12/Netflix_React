import React,{Fragment} from 'react'
import Main from './Component/Main'
import Login from './Component/Account/Signin'
import Show from './Component/Show'
import Showinfo from './Component/Showinfo'
import Video from './Component/Video'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function Home() {
  return (
    <Fragment>
        <Router>
            <Routes>
              <Route Exect path='/' element={<Main/>}></Route>
              <Route path='/Signin' element={<Login/>}></Route> 
              <Route path='/show' element={<Show/>}></Route> 
              <Route path='/show-information' element={<Showinfo/>}></Route> 
              <Route path='/video' element={<Video/>}></Route> 
            </Routes>
        </Router>
    </Fragment>
  )
}

export default Home