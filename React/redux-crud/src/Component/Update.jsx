import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updatedata } from '../Slicedata/userSlice';

function Update() {

    const redirect = useNavigate()

    const { id } = useParams();

    const { user, loading } = useSelector((state) => state.users)

    console.log(user)

    const [showupdate, setshowupdate] = useState([])

    console.log(id)

    useEffect(() => {
        const singleuser = user.filter((data) => data.id === id)
        console.log(singleuser[0])
        setshowupdate(singleuser[0])
    }, [])

    const getchamge = (e) => {
        setshowupdate({
            ...showupdate,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const hanldesubmit=(e)=>{
        e.preventDefault();
        dispatch(updatedata(showupdate))
        redirect("/")
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className='text-center'>USER data add</h1>
                        <form action="" >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                {/* <input type="text" value={updatedata && updatedata.name} onChange={(e)=>setupdatedata({...updatedata,name : e.target.value})} name='name' className="form-control" id="name" placeholder="Enter your name" /> */}
                                <input type="text" value={showupdate && showupdate.name} onChange={getchamge} name='name' className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your Email</label>
                                <input type="email" name='email' value={showupdate && showupdate.email} onChange={getchamge} className="form-control" id="eamil" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" name='phone' value={showupdate && showupdate.phone} onChange={getchamge} className="form-control" id="phone" placeholder="Enter your phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter your password</label>
                                <input type="password" name='password' value={showupdate && showupdate.password} onChange={getchamge} className="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <div>
                                <input type="submit" onClick={hanldesubmit} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update
