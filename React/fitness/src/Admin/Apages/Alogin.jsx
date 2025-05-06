import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
        }
    })

    const [login,setlogin] = useState({
        email:"",
        password:""
    })

    const gechange=(e)=>{
        setlogin({
            ...login,
            [e.target.name]:e.target.value
        })
        console.log(login)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();

        const {email,password} = login

        // if(email == "" || password == ""){
        //     console.log("pls enter your valid data")
        //     toast.error("pls enter your valid data")
        //     return false
        // }
        if(!email.trim() || !password.trim()){
            console.log("pls enter your valid data")
            toast.error("pls enter your valid data")
            return false
        }
        
        try {

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            if(res.data.length == 0){
                console.log("Email does not match..!")
                toast.error("Email does not Match..!")
                return false
            }

            let admin = res.data[0]

            if(password != admin.password){
                console.log("Password does not match..!")
                toast.error("Password does not match..!")
                return false
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            redirect("/dash")
            console.log("login successfully..")
            toast.success("Alogin Successfully..!")
            

            
        } catch (error) {
            console.log("api data not Found",error)
            toast.error("Api data not Found..!")
        }

    }

    



    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                       <form action="" onSubmit={handlesubmit}>
                       <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-light text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <MDBInput value={login.email} name='email' onChange={gechange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput value={login.password} name='password' onChange={gechange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                    Login
                                </MDBBtn>



                            </MDBCardBody>
                        </MDBCard>
                       </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin
