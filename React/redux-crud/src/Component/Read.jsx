import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, showuser } from '../Slicedata/userSlice'
import Navabar from './Navabar'
import { Link } from 'react-router-dom'

function Read() {

    const { user, loading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(showuser())
    }, [])

    const dispatch = useDispatch()

    return (
        <div>
            <Navabar />
            <div className="container">

                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data) => {
                                console.log(data)
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td><button className='btn btn-primary'>View</button>
                                            <Link to={`/update/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={() => dispatch(deleteuser(data.id))}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Read
