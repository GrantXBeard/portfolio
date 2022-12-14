import React, {useState} from "react";
import './Image.css'
import Modal from '../Modal/Modal'

interface IImageProps {
    source: string
}

const Image = ({ source }: IImageProps) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <img onClick={() => setShowModal(true)} className="thumbnail" src={source}/>
        {showModal && <Modal setShow={setShowModal} source={source} />}
        </>
    )
}

export default Image