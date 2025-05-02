import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';

function TeamMange() {

    const [team, setteam] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        // console.log(res.data)
        setteam(res.data)
    }

    const handledelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/team/${id}`)
        console.log(res.data)
        fetchdata()
    }

    const [Teamedit, setTeamedit] = useState(null)
    const [Teamediting, setTeamediting] = useState({
        id: "",
        name: "",
        Profession: "",
        img: ""
    })

    const savedata = (data) => {
        setTeamedit(data)
        setTeamediting(data)
    }

    const getchangedata=(e)=>{
        setTeamediting({
            ...Teamediting,
            [e.target.name]:e.target.value
        })
    }

    const handleupdate=async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:3000/team/${Teamediting.id}`,Teamediting)
            console.log(res.data)
            fetchdata()
            toast.success("Team data Update success")
            setTeamedit(null)
        } catch (error) {
            console.log("APi data not Found",error)
            toast.error("Api data not Found..",error)
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container">
                <h1>Team management</h1>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>name</th>
                            <th scope='col'>Profession</th>
                            <th scope='col'>imge</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {

                            team && team.map((data) => {
                                const { id, name, img, Profession } = data
                                return (
                                    <tr key={id}>
                                        <td>
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>{id}</p>
                                            </div>

                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{name}</p>
                                            {/* <p className='text-muted mb-0'>{data.desc.slice(0, 30)}</p> */}
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{Profession}</p>
                                        </td>
                                        <td>  <img
                                            src={img}
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        /></td>
                                        <td>
                                            <MDBBtn className='btn btn-info' rounded size='md' >
                                                view
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-success mx-2' rounded size='md' onClick={() => savedata(data)}>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-danger' rounded size='md' onClick={() => handledelete(id)} >
                                                delete
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </MDBTableBody>
                </MDBTable>

                {
                    Teamedit && (
                        <div className="container-fluid">
                            <div className="container py-5">
                                <div className="row g-5">
                                    <div className="col-lg-12 " data-wow-delay="0.4s">
                                        <div className="form-section bg-dark p-5 h-100">
                                            <h1 className="display-4 text-white mb-4 text-center">Team data Update</h1>
                                            <form >
                                                <div className="row g-4">
                                                    <div className="col-lg-12 col-xl-6">
                                                        <div className="form-floating form-section-col">
                                                            <input type="text" value={Teamediting.name} onChange={getchangedata} name='name' className="form-control border-0" id="name" placeholder="Your Name" />
                                                            <label htmlFor="name">Your Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-xl-6">
                                                        <div className="form-floating form-section-col">
                                                            <input type="text" value={Teamediting.Profession} onChange={getchangedata} name='Profession' className="form-control border-0" id="title" placeholder="Your Profession" />
                                                            <label htmlFor="title">Your Profession</label>
                                                        </div>
                                                    </div>



                                                    <div className="col-12">
                                                        <div className="form-floating form-section-col">
                                                            <input type="url" name='img' value={Teamediting.img} onChange={getchangedata}  className="form-control border-0" id="image" placeholder="your image" />
                                                            <label htmlFor="image">your image</label>
                                                        </div>
                                                    </div>


                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="form-section-col col-6">
                                                                <button className="btn-primary w-100 py-3 px-5" onClick={handleupdate} >Update data</button>
                                                            </div>
                                                            <div className="form-section-col col-6">
                                                                <button className="btn-primary w-100 py-3 px-5" onClick={() => setTeamedit(null)}>Cancle</button>
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
        </div>
    )
}

export default TeamMange
