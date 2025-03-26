import React from 'react';
import './style.css'

function Css() {


    // internal css

    let internal = {
        background: "blue",
        color: "red",
        padding: "50px"
    }
    return (
        <div>
            {/* 1) inline css */}
            {/* 2 ) internal */}
            {/* 3) external  */}

            {/* inline css as object */}
            <h1 style={{ background: "red", color: "blue", fontSize: "50px" }}>Hello this H1 tag</h1>


            <h1 style={internal}>hello this internal css</h1>

            <div id='h1'>Hello this external css</div>

            <div className="main"></div>

        </div>
    )
}

export default Css
