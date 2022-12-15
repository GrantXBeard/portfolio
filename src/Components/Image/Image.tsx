import React, {useState} from "react";
import './Image.css'
import Modal from '../Modal/Modal'

interface IImageProps {
    source: string
    description: string
    color: string
}

const Image = ({ source, description, color }: IImageProps) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className="img-wrapper">
            <div className={`overlay-${color}`} >
                <img onClick={() => setShowModal(true)} className="thumbnail opacity" src={source}/>
            </div>
        </div>
        {showModal && <Modal setShow={setShowModal} source={source} description={description} />}
        </>
    )
}

export default Image