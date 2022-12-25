import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

interface IHeaderProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}

const Header = ({ setShow, show }: IHeaderProps) => {

    const setButtonChoice = () => {
        let button
        if (show) {
            button = '-'
        } else {
            button = '+'
        }
        return button
    }

    const setRoute = () => {
        let route
        if (!show) {
            route = 'bio'
        } else {
        route = ''
        }
        return route
    }

    const handleSetShow = () => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
        <div className='header'>
            <h1>Grant X Beard</h1>
            <Link to={`/${setRoute()}`}>
                <h3 onClick={() => handleSetShow()}>{setButtonChoice()}</h3>
            </Link>
        </div>
    )
}

export default Header