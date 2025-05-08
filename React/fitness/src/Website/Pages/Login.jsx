import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    })

    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const gechange = (e) => {
        setlogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login)
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        const { email, password } = login

        // if(email == "" || password == ""){
        //     console.log("pls enter your valid data")
        //     toast.error("pls enter your valid data")
        //     return false
        // }
        if (!email.trim() || !password.trim()) {
            console.log("pls enter your valid data")
            toast.error("pls enter your valid data")
            return false
        }

        try {

            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            if (res.data.length == 0) {
                console.log("Email does not match..!")
                toast.error("Email does not Match..!")
                return false
            }

            let user = res.data[0]

            
            if (password != user.password) {
                console.log("Password does not match..!")
                toast.error("Password does not match..!")
                return false
            }

            if(user.status == "block"){
                console.log("Acoount has been block")
                toast.error("Acoount has been block")
                return false
            }


            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)
            redirect("/")
            console.log("login successfully..")
            toast.success("Ulogin Successfully..!")



        } catch (error) {
            console.log("api data not Found", error)
            toast.error("Api data not Found..!")
        }

    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <form action="" onSubmit={handlesubmit}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput wrapperClass='mb-4 w-100' name='email' value={login.email} onChange={gechange} label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput wrapperClass='mb-4 w-100' name='password' value={login.password} onChange={gechange} label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                    <MDBBtn size='lg'>
                                        Login
                                    </MDBBtn>

                                    <hr className="my-4" />



                                </MDBCardBody>
                            </form>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Login
