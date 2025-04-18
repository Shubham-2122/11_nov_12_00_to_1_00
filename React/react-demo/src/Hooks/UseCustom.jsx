import React from 'react'
import Header from '../layout/Coman/Header'
import UseCounter from './UseCounter'

function UseCustom() {

    const [count, increment, decrement, zero] = UseCounter()

    return (
        <div>
            <Header />
            <h1>Hello this custom data</h1>
            <h1>Hello count :- {count}</h1>
            <button onClick={increment}>Incement</button>
            <button onClick={decrement}>dercement</button>
            <button onClick={zero}>Zero</button>
        </div>
    )
}

export default UseCustom
