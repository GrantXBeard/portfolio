import React, {useState} from "react";
import './Image.css'
import Modal from '../Modal/Modal'

interface IImageProps {
    source: string
    description: string
}

const Image = ({ source, description }: IImageProps) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <img onClick={() => setShowModal(true)} className="thumbnail" src={source}/>
        {showModal && <Modal setShow={setShowModal} source={source} description={description} />}
        </>
    )
}

export default Image