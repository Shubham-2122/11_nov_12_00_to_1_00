import React, { useState } from 'react'

function Form_object() {

    const [form, setform] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handlechnage = (e)=>{
        setform({
            // spred op
            ...form,
            // name = value
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    return (
        <div>
            <div className="col-6">
                <form>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputuser" className="form-label">Username</label>
                        <input type="text" value={form.name} onChange={(e) => { setform({ ...form, name: e.target.value }) }} className="form-control" id="exampleInputuser" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={form.email} onChange={(e) => { setform({ ...form, email: e.target.value }) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputmobile" className="form-label">Mobile</label>
                        <input type="tel" value={form.phone} onChange={(e) => { setform({ ...form, phone: e.target.value }) }} className="form-control" id="exampleInputmobile" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={form.password} onChange={(e) => { setform({ ...form, password: e.target.value }) }} className="form-control" id="exampleInputPassword1" />
                    </div> */}

                    <div className="mb-3">
                        <label htmlFor="exampleInputuser" className="form-label">Username</label>
                        <input type="text" value={form.name} name='name' onChange={handlechnage} className="form-control" id="exampleInputuser" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={form.email} name='email' onChange={handlechnage}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputmobile" className="form-label">Mobile</label>
                        <input type="tel" value={form.phone} name='phone' onChange={handlechnage} className="form-control" id="exampleInputmobile" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={form.password} onChange={handlechnage} name='password' className="form-control" id="exampleInputPassword1" />
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

export default Form_object
