import React, { useState } from "react"
import photo from "../assets/photo.png"
import Cross from "../assets/cross.svg"
import { Link } from "react-router-dom"

export const Page_1 = () => {
    const styleModalClose = {
        opacity: "0",
}
    const styleModalOpen = {
        opacity: "1",
        pointerEvents: "all",
        backdropFilter: "blur(50px)",
    }

    const [modal, setModal] = useState(styleModalClose)
    const handleLogin = () => {
        setModal(modal.opacity === "0" ? styleModalOpen : styleModalClose)
    }
    return (
        <div className="page">
            <div className="Page_1">
                <div className="modal" style={modal}>
                    <Cross 
                        onClick={handleLogin}
                        className="icon_cross" />
                    <div>
                        <input placeholder="Email" type="text" className="input"/>
                    </div>
                    <div>
                        <input placeholder="Password" type="text" className="input"/>
                    </div>
                    <button className="btn_signIn">Sign in</button>
                </div>
                <div className="header_block">
                    <h1>OneAI</h1>
                    <button 
                        onClick={handleLogin}
                        className="btn">Sign In
                    </button>
                </div>
                <div className="content_block">
                    <Link to={"/page_2"} className="link" >
                        <div className="card">
                            <img src={photo} alt="photo" className="image" />
                            <h2 className="title">Lego</h2>
                        </div>
                    </Link>
                    <Link to={"/page_2"} className="link" >
                        <div className="card">
                            <img src={photo} alt="photo" className="image" />
                            <h2 className="title">Lego</h2>
                        </div>
                    </Link>
                </div>
                <div className="footer">
                    <p className="mail">Get help at support@avgen.me</p>
                    <p className="descr">Copyright © 2024 Mook Ltd. <br /> All rights reserved.</p>
                </div>
            </div>
       </div>    
    )
    
}