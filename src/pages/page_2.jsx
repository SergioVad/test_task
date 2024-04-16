import React, { useState } from "react"
import photo from "../assets/photo.png"
import lego from "../assets/lego.png"
import device from "../assets/device.png"
import gallery from "../assets/gallery.png"
import Arrow from "../assets/arrow.svg"
import { Link } from "react-router-dom"
import human from "../assets/human.png"

export const Page_2 = () => {
    const styleModalClose = {
        zIndex: '0',
        opacity: "0",
}
    const styleModalOpen = {
        opacity: "1",
        pointerEvents: "all",
        zIndex: '100',
    }

    const [modalHuman, setModalHuman] = useState(styleModalClose)
    const handleModal = () => {
        setModalHuman(modalHuman.opacity === "0" ? styleModalOpen : styleModalClose)
    }
    return (
        <div className="page">
            <div className="Page_2">
                <div className="modal_human" style={modalHuman}>
                    <img src={human} alt="human" className="image_human"/>
                    <button className="btn_save">Save</button>
                    <Link to={"/page_3"}>
                        <button 
                            onClick={handleModal}
                            className="btn_more"
                        >   
                            More pics
                        </button>
                    </Link>
                </div>
                
                <Link to={"/"} className="link">
                    <button className="btn_back">
                        <Arrow className="icon_arrow" />
                        Go back
                    </button>
                </Link>
                <div className="content_block_page_2">
                        <div className="wrapper_img">
                            <div className="before">
                                <img src={photo} width={"305px"} height={"320px"} alt="photo" />
                            </div>
                            <div className="after after_1">
                                <img src={lego} width={"305px"} height={"320px"} alt="lego" />
                            </div>
                        </div>

                        <div className="wrapper_image_small">
                            <div 
                                className="card_image_small"
                                onClick={handleModal}
                            >
                                <img src={gallery} alt="gallery" className="image_small" />
                                <p className="text_image_small">Choose photo <br /> from gallery</p>
                            </div>

                            <div
                                className="card_image_small"
                                onClick={handleModal}
                            >
                                <img src={device} alt="device" className="image_small" />
                                <p className="text_image_small">Take photo <br /> with camera</p>
                            </div>
                        
                        </div>
                </div>
            </div>
       </div>    
    )
    
}