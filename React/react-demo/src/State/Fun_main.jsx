import React, { useState } from 'react'

function Fun_main() {

    const [data, setdata] = useState({
        name: "Shubham jadav",
        count: 0
    })

    // console.log(data.count)

    return (
        <div>
            <h1>hello this Funtion data</h1>
            <h1>Hello name :- {data.name}</h1>
            {/* spared optros */}
            <button onClick={() => { setdata({ ...data, name: "dhruvil patel" }) }}>Change name</button>
            <button onClick={() => setdata({ ...data, name: "Yug patel" })}>Change name 2</button>

            <h1>Counter : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Decement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Reset</button>
        </div>
    )
}

export default Fun_main
