import React, {useState} from "react";
import './Image.css'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'

interface IImageProps {
    source: string
    description: string
    color: string
    type: string
    id: number
}

const Image = ({ source, description, color, type, id }: IImageProps) => {

    const [showModal, setShowModal] = useState(false)
    const [overlay, setOverlay] = useState('')
    const [opacity, setOpacity] = useState('')

    return (
        <>
            <div className="img-wrapper">
                <div className={overlay} >
                    <Link to={`${type}/${id}`}>
                        <img onClick={() => setShowModal(true)} className={`thumbnail ${opacity}`} src={source} onMouseEnter={() => {setOverlay(`overlay-${color}`); setOpacity('opacity')}} onMouseLeave={() => {setOverlay(''); setOpacity('')}}/>
                    </Link>
                </div>
            </div>
            {showModal && 
                <Link to={'/'}>
                    <Modal setShow={setShowModal} source={source} description={description} />
                </Link>
                
            }
        </>
    )
}

export default Image