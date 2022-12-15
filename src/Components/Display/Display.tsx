import React, {useState, useEffect} from "react"
import './Display.css';
import { IWorkData } from '../../Types/PortfolioTypes';
import Image from '../Image/Image';


interface IDisplayProps {
    title: string
    work: IWorkData[]
}

const Display = ({ title, work }: IDisplayProps) => {

    const [isClicked, setIsClicked] = useState(false)

    const thumbnails = work.map(each => {
        return <Image source={each.img} key={each.id} description={each.description}/>
    })

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
                {thumbnails}
            </div>}
        </section>
    )
}

export default Display