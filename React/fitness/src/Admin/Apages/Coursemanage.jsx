import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

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

    const [view,setview] = useState({
        id:"",
        title:"",
        desc:"",
        logo:"",
        day:"",
        time:"",
        name :"",
        img:""
    })

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
                                            <MDBBtn className='btn btn-success mx-2' rounded size='md'>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-danger' rounded size='md'>
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
        </div>

    )
}

export default Coursemanage
