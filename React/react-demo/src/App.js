import React from "react";
import Main_compo from "./Componenet/Main_compo";
import Hello from "./Jsx/Hello";
import Hello2 from "./Jsx/Hello2";
import Css from "./css/Css";
import Props_main from "./Props/Props_main";
import Main_state from "./State/Main_state";
import Form from "./Formhadling/Form";
import Form_object from "./Formhadling/Form_object";
import Useeffect from "./Useeffect/Useeffect";
import Usetable from "./Useeffect/Usetable";
import Usercard from "./Useeffect/Usercard";
import Navabar from "./Bootstrap/Navabar";
import React_boot from "./Bootstrap/React_boot";
import Mdb_Card from "./Bootstrap/Mdb_Card";
import Home from "./layout/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layout/pages/About";
import Contact from "./layout/pages/Contact";
import Help from "./layout/pages/Help";
import About1 from "./layout/pages/About1";
import About2 from "./layout/pages/About2";
import Notfound from "./layout/pages/Notfound";
import Main_context from "./Context/Main_context";
import Uselife from "./Lifecycle/Uselife";
import Useredu from "./Hooks/Useredu";
import Useref from "./Hooks/Useref";
import UseCustom from "./Hooks/UseCustom";


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* component */}
        {/* <Main_compo /> */}

        {/* Jsx compo */}
        {/* <Hello /> */}
        {/* <Hello2 /> */}


        {/* <Css /> */}

        {/* props data */}
        {/* <Props_main /> */}

        {/* state data */}
        {/* <Main_state /> */}

        {/* state form */}
        {/* <Form /> */}
        {/* <Form_object /> */}

        {/* <Useeffect /> */}
        {/* <Usetable /> */}
        {/* <Usercard /> */}


        {/* <Navabar /> */}
        {/* <React_boot /> */}
        {/* <Mdb_Card /> */}

      <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path="about1" element={<About1 />} />
            <Route path="about2" element={<About2 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/context" element={<Main_context />} />
          <Route path="/life" element={<Uselife />} />
          <Route path="/reducer" element={<Useredu />} />
          <Route path="/ref" element={<Useref />} />
          <Route path="/custom" element={<UseCustom />} />
          
          {/* univseral  routes */}
          <Route path="*" element={<Notfound />} />

      </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;