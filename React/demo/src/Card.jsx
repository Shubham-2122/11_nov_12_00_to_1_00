import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Card() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setcard(res.data)
    }

    return (
        <div>
            <div className="conatiner">
                <div className="row">
                {
                card.map((product, index) => {
                    return (
                       <div className="col-md-4" key={index}>
                         <div className="card" style={{ width: '18rem' }}>
                            <img src={product.image} style={{height:"300px"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{product.id}</h5>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Buy</a>
                                <a href="#" className="btn btn-primary mx-2">Add to cart</a>
                            </div>
                        </div>
                       </div>
                    )
                })

            }
                </div>
            </div>
        </div>
    )
}

export default Card
