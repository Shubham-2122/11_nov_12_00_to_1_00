import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';

function Coursemanage() {

    const [coruse, setcourse] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    // all data fetch
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/course")
        // console.log(res.data)
        setcourse(res.data)
    }

    // one data call
    const getview = async (id) => {
        const res = await axios.get(`http://localhost:3000/course/${id}`)
        console.log(res.data)
        setview(res.data)
    }

    // view data
    const [view, setview] = useState({
        id: "",
        title: "",
        desc: "",
        logo: "",
        day: "",
        time: "",
        name: "",
        img: ""
    })

    const hadnledelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/course/${id}`)
        console.log(res.data)
        fetchdata()
        toast.success("course data removed..")
    }


    // model
    const [courseedit, setcourseedit] = useState(null);
    // updated data
    const [coursupdate, setcourseupdate] = useState({
        id: "",
        title: "",
        desc: "",
        logo: "",
        day: "",
        time: "",
        name: "",
        img: ""
    })

    const savedata = (data) => {
        setcourseedit(data)
        setcourseupdate(data)
    }

    // update function 
    const hadleupdatedata=async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:3000/course/${coursupdate.id}`,coursupdate);
            console.log(res.data)
            fetchdata()
            toast.success("Course updated success..")
            setcourseedit(null)

        } catch (error) {
            console.log("api not found",error)
            toast.error("api data not found")
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center'>Hello Course Manage</h1>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Day</th>
                            <th scope='col'>TIme</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {

                            coruse && coruse.map((data) => {
                                // console.log(data)
                                return (
                                    <tr key={data.id}>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={data.img}
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{data.id}</p>
                                                    <p className='text-muted mb-0'>{data.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{data.title}</p>
                                            <p className='text-muted mb-0'>{data.desc.slice(0, 30)}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{data.day}</p>
                                        </td>
                                        <td>{data.time}</td>
                                        <td>
                                            <MDBBtn className='btn btn-info' onClick={() => getview(data.id)} rounded size='md' data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                view
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-success mx-2' rounded size='md' onClick={() => savedata(data)}>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-danger' rounded size='md' onClick={() => hadnledelete(data.id)}>
                                                delete
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </MDBTableBody>
                </MDBTable>



            </div>
            {/* view model */}
            {
                (
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="courses-item">
                                        <div className="courses-item-inner p-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="courses-icon-img p-3">
                                                    <img src={view.logo} className="img-fluid" alt />
                                                </div>
                                                <div className="data-info d-flex flex-column">
                                                    <div className="courses-trainer d-flex align-items-center mb-1">
                                                        <div className="me-2" style={{ width: 50, height: 50 }}>
                                                            <img src={view.img} className="img-fluid" alt />
                                                        </div>
                                                        <p className="mb-0">{view.name}</p>
                                                    </div>
                                                    <div className="courses-date">
                                                        <p className="mb-1">Date: {view.day}</p>
                                                        <p className="mb-0">Time: {view.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="d-inline-block h4 mb-3">{view.title}</a>
                                            <p className="mb-4">{view.desc}
                                            </p>
                                            <a href="#" className="btn btn-primary py-2 px-4"> <span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* update model create */}

            {
                courseedit && (
                    <div className="container-fluid">
                        <div className="container py-5">
                            <div className="row g-5">
                                <div className="col-lg-12 ">
                                    <div className="form-section bg-dark p-5 h-100">
                                        <h1 className="display-4 text-white mb-4 text-center">Course Update data</h1>
                                        <form >
                                            <div className="row g-4">
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="form-floating form-section-col">
                                                        <input type="text"  name='name' value={coursupdate.name} onChange={(e)=>setcourseupdate({...coursupdate,name:e.target.value})} className="form-control border-0" id="name" placeholder="Your Name" />
                                                        <label htmlFor="name">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="form-floating form-section-col">
                                                        <input type="text" name='title' value={coursupdate.title} onChange={(e)=>setcourseupdate({...coursupdate,title:e.target.value})} className="form-control border-0" id="title" placeholder="Your title" />
                                                        <label htmlFor="title">Your Title</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="form-floating form-section-col">
                                                     
                                                        <div class="form-floating">
                                                            <select class="form-select" name='day' value={coursupdate.day} onChange={(e)=>setcourseupdate({...coursupdate,day:e.target.value})} id="floatingSelect" aria-label="Floating label select example">
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
                                                            <select class="form-select" name='time' value={coursupdate.time} onChange={(e)=>setcourseupdate({...coursupdate,time:e.target.value})} id="floatingSelect" aria-label="Floating label select example">
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
                                                        <input type="url" name='logo' value={coursupdate.logo}onChange={(e)=>setcourseupdate({...coursupdate,logo:e.target.value})}  className="form-control border-0" id="logo" placeholder="your logo" />
                                                        <label htmlFor="logo">your logo</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating form-section-col">
                                                        <input type="url" name='img' value={coursupdate.img} onChange={(e)=>setcourseupdate({...coursupdate,img:e.target.value})} className="form-control border-0" id="image" placeholder="your image" />
                                                        <label htmlFor="image">your image</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea name='desc'  className="form-control border-0" value={coursupdate.desc} onChange={(e)=>setcourseupdate({...coursupdate,desc:e.target.value})} placeholder="Your description" id="message" style={{ height: 160 }} defaultValue={""} />
                                                        <label htmlFor="message">Your description</label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                   <div className="row">
                                                   <div className="form-section-col col-6">
                                                        <button className="btn-primary w-100 py-3 px-5" onClick={hadleupdatedata}>Update data</button>
                                                    </div>
                                                    <div className="form-section-col col-6">
                                                        <button className="btn-primary w-100 py-3 px-5" onClick={()=>setcourse(null)}>Cancle</button>
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
                )
            }

        </div>

    )
}

export default Coursemanage
