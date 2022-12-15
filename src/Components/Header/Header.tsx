import React from 'react'
import './Header.css';

interface IHeaderProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}

const Header = ({ setShow, show }: IHeaderProps) => {
    return (
        <div className='header'>
            <h1>Grant X Beard</h1>
            <h3 onClick={() => {
                if (show) {
                    setShow(false)
                } else {
                    setShow(true)
                }
            }}>+</h3>
        </div>
    )
}

export default Header