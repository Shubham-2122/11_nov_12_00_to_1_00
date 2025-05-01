import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Teamadd() {

    const redirect = useNavigate()

    const [form, setfrom] = useState({
        id: "",
        name: "",
        Profession: "",
        img: ""
    })

    const getchange = (e) => {
        setfrom({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post("http://localhost:3000/team", form)
            console.log(res.data)
            setfrom({
                id: "",
                name: "",
                Profession: "",
                img: ""
            })
            redirect("/teammanger")
        } catch (error) {
            console.log("team api not found..",error)
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
                                    <h1 className="display-4 text-white mb-4 text-center">Team data add</h1>
                                    <form onSubmit={handlesubmit}>
                                        <div className="row g-4">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={form.name} onChange={getchange} name='name' className="form-control border-0" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating form-section-col">
                                                    <input type="text" value={form.Profession} onChange={getchange} name='Profession' className="form-control border-0" id="title" placeholder="Your Profession" />
                                                    <label htmlFor="title">Your Profession</label>
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <div className="form-floating form-section-col">
                                                    <input type="url" name='img' value={form.img} onChange={getchange} className="form-control border-0" id="image" placeholder="your image" />
                                                    <label htmlFor="image">your image</label>
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

export default Teamadd
