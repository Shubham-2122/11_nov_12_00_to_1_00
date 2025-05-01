import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CourseAdd() {

    const redirect = useNavigate()


    const [data,setdata]= useState({
        id:"",
        title:"",
        desc:"",
        logo:"",
        day:"",
        time:"",
        name :"",
        img:""
    })

    const getchnage=(e)=>{
        setdata({
            ...data,
            // new id
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const adddata=async(e)=>{
        e.preventDefault();

        try {
            
            const res = await axios.post("http://localhost:3000/course",data)
            console.log(res.data)
            setdata({
                id:"",
                title:"",
                desc:"",
                logo:"",
                day:"",
                time:"",
                name :"",
                img:""
            })
            redirect("/coursemange")

        } catch (error) {
            console.log("api not Found",error)
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <div className="container-fluid">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-12 wow fadeInRight" data-wow-delay="0.4s">
                                <div className="form-section bg-dark p-5 h-100">
                                    <h1 className="display-4 text-white mb-4 text-center">Course data add</h1>
                                    <form onSubmit={adddata}>
                                        <div className="row g-4">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={data.name} onChange={getchnage} name='name' className="form-control border-0" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={data.title} onChange={getchnage} name='title' className="form-control border-0" id="title" placeholder="Your title" />
                                                    <label htmlFor="title">Your Title</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    {/* <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                                                <label htmlFor="phone">Your Phone</label> */}
                                                    <div class="form-floating">
                                                        <select class="form-select" name='day' onChange={getchnage} value={data.day} id="floatingSelect" aria-label="Floating label select example">
                                                            {/* <option selected>Open this select menu</option> */}
                                                            <option value="monday">mon</option>
                                                            <option value="tuesday">thu</option>
                                                            <option value="wednesday">wed</option>
                                                            <option value="thrusday">Thru</option>
                                                            <option value="friday">Fri</option>
                                                            <option value="satur`day">stu</option>
                                                        </select>
                                                        <label for="floatingSelect">Select Days</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <div class="form-floating">
                                                        <select class="form-select" name='time' onChange={getchnage} value={data.time} id="floatingSelect" aria-label="Floating label select example">
                                                            {/* <option selected>Open this select menu</option> */}
                                                            <option value="6:00pm-7:00pm">6:00pm-7:00pm</option>
                                                            <option value="7:00pm-8:00pm">7:00pm-8:00pm</option>
                                                            <option value="9:00pm-10:00pm">9:00pm-10:00pm</option>
                                                            <option value="6:00am-7:00am">6:00am-7:00am</option>
                                                            <option value="7:00pm-8:00pm">7:00pm-8:00pm</option>
                                                            <option value="9:00pm-10:00pm">9:00pm-10:00pm</option>
                                                        </select>
                                                        <label for="floatingSelect">Select Time</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-section-col">
                                                    <input type="url" name='logo' value={data.logo} onChange={getchnage} className="form-control border-0" id="logo" placeholder="your logo" />
                                                    <label htmlFor="logo">your logo</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-section-col">
                                                    <input type="url" name='img' value={data.img} onChange={getchnage} className="form-control border-0" id="image" placeholder="your image" />
                                                    <label htmlFor="image">your image</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea name='desc' value={data.desc} onChange={getchnage} className="form-control border-0" placeholder="Your description" id="message" style={{ height: 160 }} defaultValue={""} />
                                                    <label htmlFor="message">Your description</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-section-col">
                                                    <button className="btn-primary w-100 py-3 px-5">Send Message</button>
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

export default CourseAdd
