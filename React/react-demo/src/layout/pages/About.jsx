import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div >
      <Header />
        <div className="container">
        <h1 className='bg-success m-5'>About pages</h1>
        <Link to="about1" className='mx-5'>About1</Link>
        <Link to="about2">About2</Link>

        <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default About
