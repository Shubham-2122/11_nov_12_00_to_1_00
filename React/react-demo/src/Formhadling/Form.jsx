import React, { useState } from 'react'

function Form() {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [phone,setphone] = useState("")

    const changephone = (e)=>{
        setphone(e.target.value)
    }

    return (
        <div className='container'>
          <div className="col-6">
          <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputmobile" className="form-label">Mobile</label>
                    <input type="tel" value={phone} onChange={changephone} className="form-control" id="exampleInputmobile" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

    )
}

export default Form
