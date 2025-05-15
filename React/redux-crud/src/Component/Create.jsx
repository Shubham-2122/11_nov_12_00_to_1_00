import React, { useState } from 'react'
import Navabar from './Navabar'
import { useDispatch } from 'react-redux'
import { createuser } from '../Slicedata/userSlice'
import { useNavigate } from 'react-router-dom'

function Create() {

    const redirect = useNavigate()

    const dispatch = useDispatch()

    const [form,setform] = useState({
        id:"",
        name:"",
        email:"",
        phone:"",
        password:""
    }) 

    const getchange=(e)=>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const datasubmit=(e)=>{
        e.preventDefault();
          setform("")
        dispatch(createuser(form))
        redirect("/")
    }

    return (
        <div>
            <Navabar />

            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className='text-center'>USER data add</h1>
                        <form action="" onSubmit={datasubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input type="text" name='name' onChange={getchange} value={form.name} className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your Email</label>
                                <input type="email" name='email' onChange={getchange}  value={form.email} className="form-control" id="eamil" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" name='phone' onChange={getchange} value={form.phone} className="form-control" id="phone" placeholder="Enter your phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter your password</label>
                                <input type="password" name='password' onChange={getchange} value={form.password} className="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <div>
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Create
