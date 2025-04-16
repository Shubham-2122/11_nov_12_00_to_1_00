import React from 'react'

function Space1() {
  return (
    <div>
      <div className="container bg-amber-300  md:w-11/12 m-auto">
        Hello 
      </div>
      {/* 4 /  2 /  3/ */}
      <div className="container bg-amber-300  w-1/4 ">
        Hello 
      </div>
      <div className="container bg-amber-300  md:w-1/4 lg:w-2/4 ">
        Hello 
      </div>
      <div className='bg-blue-500 p-10 m-5'>
        hello padding data
      </div>
      <div className='bg-green-500 pl-40 ml-5 mt-16 mr-14 mb-4 pr-52 pt-10 pb-6'>
        hello padding data
      </div>

      <div className='bg-purple-500 px-44 py-12 mx-52 my-24'>
        hello padding data
      </div>

      <div className='bg-gray-500 p-[50px] m-[30px]'>
        hello padding data
      </div>
    </div>
  )
}

export default Space1
