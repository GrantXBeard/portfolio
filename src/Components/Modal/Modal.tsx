import React from "react";
import './Modal.css'

interface IModalProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    source: string
}

const Modal = ({ setShow, source }: IModalProps) => {
    return (
        <div onClick={() => setShow(false)}>
            <img src={source}/>
        </div>
    )
}

export default Modal