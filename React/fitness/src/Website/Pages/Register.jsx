import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {

    const redirect = useNavigate()

    const login=()=>{
        redirect("/login")
    }
    
    const [form,setfrom] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        status: ""
    })

    const getchangedata=(e)=>{
        setfrom({
            ...form,
            id : new Date().getTime().toString(),
            status : "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();

        // if()

        try {
            const res = await axios.post("http://localhost:3000/user",form);
            console.log(res.data)
            toast.success("Register data success..")
        } catch (error) {
            console.log("api data not found")   
        }
    }
  
    return (
    <div>
       <div className="container">
                <div className="container-fluid">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-12 " data-wow-delay="0.4s">
                                <div className="form-section bg-dark p-5 h-100">
                                    <h1 className="display-4 text-white mb-4 text-center">Register data</h1>
                                    <form >
                                        <div className="row g-4">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={form.name} onChange={getchangedata} name='name' className="form-control border-0" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={form.email} onChange={getchangedata} name='email' className="form-control border-0" id="email" placeholder="Your email" />
                                                    <label htmlFor="email">Your email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-section-col">
                                                    <input type="url" value={form.img} onChange={getchangedata} name='img' className="form-control border-0" id="image" placeholder="your image" />
                                                    <label htmlFor="image">your image</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-section-col">
                                                    <input type="password" value={form.password} onChange={getchangedata} name='password' className="form-control border-0" id="password" placeholder="your password" />
                                                    <label htmlFor="password">your password</label>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                               <div className="row">
                                               <div className="form-section-col col-6">
                                                    <button onClick={handlesubmit} className="btn-primary w-100 py-3 px-5">Register</button>
                                                </div>

                                                <div className="form-section-col col-6">
                                                    <button onClick={login}  className="btn-primary w-100 py-3 px-5">Already Account</button>
                                                </div>
                                               </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Register
