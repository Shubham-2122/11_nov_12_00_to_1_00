import React from "react"
import Read from "./Component/Read"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./Component/Create"
import Update from "./Component/Update"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
           <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
