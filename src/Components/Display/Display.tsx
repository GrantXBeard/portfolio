import React, {useState} from "react"
import './Display.css';

interface IDisplayProps {
    title: string
}

const Display = ({ title }: IDisplayProps) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <section className="display">
            <h3 className="title" onClick={() => {
                if (isClicked) {
                    setIsClicked(false)
                } else {
                    setIsClicked(true)
                }
            }}>{title}</h3>
            {isClicked && <div className="image-bank">
                <img className="thumbnail" src="https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg"/>
                <img className="thumbnail" src="https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg"/>
            </div>}
        </section>
    )
}

export default Display