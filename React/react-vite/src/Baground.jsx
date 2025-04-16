import React from 'react'

function Baground() {
  return (
    <div>
      <h1 className='bg-amber-400'>hello this background</h1>
      <h1 className='h-52 bg-linear-to-r from-red-300 to-red-500'>hello </h1>
      <h1 className='h-52 bg-linear-to-l from-cyan-300 to-red-500'>hello </h1>
      <h1 className='h-52 bg-linear-to-t from-red-300 to-red-500'>hello </h1>
      <h1 className='h-52 bg-linear-to-b from-red-300 to-red-500'>hello </h1>

      <h1 className='h-52 bg-linear-to-r from-green-300 via-blue-500 to-red-500'>hello </h1>
    </div>
  )
}

export default Baground
