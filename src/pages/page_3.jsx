import React from "react"
import photo from "../assets/photo.png"
import { Link } from "react-router-dom"

export const Page_3 = () => {
    return (
        <div className="page">
            <div className="Page_1">
                <div className="header_block">
                    <h1>OneAI</h1>
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