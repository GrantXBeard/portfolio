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
    const [overlay, setOverlay] = useState('')
    const [opacity, setOpacity] = useState('')


    return (
        <>
        <div className="img-wrapper">
            <div className={overlay} >
                <img onClick={() => setShowModal(true)} className={`thumbnail ${opacity}`} src={source} onMouseEnter={() => {setOverlay(`overlay-${color}`); setOpacity('opacity')}} onMouseLeave={() => {setOverlay(''); setOpacity('')}}/>
            </div>
        </div>
        {showModal && <Modal setShow={setShowModal} source={source} description={description} />}
        </>
    )
}

export default Image