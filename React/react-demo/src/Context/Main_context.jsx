import React from 'react'
import Header from '../layout/Coman/Header'
import Footer from '../layout/Coman/Footer'
import A from './props_drlling/A'
import CompoA from './usecontext/CompoA'

function Main_context() {
  return (
    <div>
        <Header />
        <div className="container">
        <h1>hello this context</h1>
        {/* <A /> */}
        <CompoA />
        </div>
      <Footer />
    </div>
  )
}

export default Main_context
