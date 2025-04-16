import React from 'react'

function Layout() {
  return (
    <div>
      <div className="flex flex-row-reverse">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div>
      {/* <div className="flex flex-col">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div> */}
      <div className="flex justify-end">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div>
      <div className="flex justify-center">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div>
      <div className="flex justify-between">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div>
      <div className="flex justify-around">
        <div className='size-56 border-2'>1</div>
        <div className='size-56 border-2'>2</div>
        <div className='size-56 border-2'>3</div>
      </div>
    </div>
  )
}

export default Layout
