import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usetable() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        // fetch("https://jsonplaceholder.typicode.com/users", {
        //     method: "GET"
        // })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((data) => {
        //         // console.log(data)
        //         setdata(data)
        //     })
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setdata(res.data)
    }

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">First</th>
                        <th scope="col">username</th>
                        <th scope="col">Email</th>
                        <th scope="col">company name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user, index) => {
                            // console.log(user)
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Usetable
