import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {

    const ridrect = useNavigate()


    const gethome =()=>{
        ridrect("/")
    }

  return (
    <div className='container'>
        <h1 className='text-danger text-center'>404 NOT FOUND</h1>
        <h1 className='text-center'>hello This page not Found </h1>
        <button className='' onClick={gethome}>Home page</button>
    </div>
  )
}

export default Notfound
