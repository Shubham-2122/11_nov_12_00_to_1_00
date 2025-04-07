import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usercard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setdata(res.data)
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((product, index) => {

                        const {id,title,price,image,description} =product

                        console.log(product)
                        return (
                           <div className="col-md-4" key={index}>
                             <div className="card" style={{ width: '18rem' }}>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{id}</h5>
                                    <h5 className="card-title">{title}</h5>
                                    <h5 className="card-title">{price}</h5>
                                    <p className="card-text">{description.slice(0,100)}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Usercard
