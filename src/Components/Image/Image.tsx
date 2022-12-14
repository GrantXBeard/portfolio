import React from "react";
import './Image.css'

interface IImageProps {
    source: string
}

const Image = ({ source }: IImageProps) => {
    return (
        <img className="thumbnail" src={source}/>
    )
}

export default Image