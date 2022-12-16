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
        let color = ''
        if (each.type === 'collage') {
            color = 'green'
        } else if (each.type === 'photography') {
            color = 'pink'
        } else if (each.type === 'sculpture') {
            color = 'yellow'
        } else if (each.type === 'mixed media') {
            color = 'red'
        } else if (each.type === 'painting') {
            color = 'black'
        } else if (each.type === 'drawing') {
            color = 'blue'
        }

        return <Image source={each.img} key={each.id} description={each.description} color={color}/>
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