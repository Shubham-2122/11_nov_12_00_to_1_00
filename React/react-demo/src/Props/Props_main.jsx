import React from 'react'
import Class_props from './Class_props'
import Func_props from './Func_props'

function Props_main() {
  return (
    <div>
  
      <div className="container">
      <h1 className='text-danger'>Hello props Class data</h1>
        <div className="row">
            <Class_props title="Card data 1" desc="card dara one product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card data 2" desc="card dara two product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card data 3" desc="card dara three product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card data 4" desc="card dara four product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card data 5" desc="card dara five product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card data 6" desc="card dara six product" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
            
        </div>
      </div>

      <div className="container">
        <h1 className='text-danger'>this data Function</h1>
        <div className="row">
            <Func_props title="card 1" desc="card data 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 1" desc="card data 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 1" desc="card data 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 1" desc="card data 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 1" desc="card data 1" img="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" />
            
        </div>
      </div>
    </div>
  )
}

export default Props_main
