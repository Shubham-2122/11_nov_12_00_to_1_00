import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

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

    const handledelete=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/team/${id}`)
        console.log(res.data)
        fetchdata()
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
                                const {id,name,img,Profession} = data
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
                                            <MDBBtn className='btn btn-success mx-2' rounded size='md'>
                                                Edit
                                            </MDBBtn>
                                            <MDBBtn className='btn btn-danger' rounded size='md' onClick={()=>handledelete(id)} >
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
        </div>
    )
}

export default TeamMange
