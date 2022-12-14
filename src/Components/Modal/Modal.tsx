import React from "react";
import './Modal.css'

interface IModalProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    source: string
}

const Modal = ({ setShow, source }: IModalProps) => {
    return (
        <div className="modal" onClick={() => setShow(false)}>
            <div className="modal-content">
                <img className="expanded" src={source}/>
                <p>Content</p>
            </div>
        </div>
    )
}

export default Modal