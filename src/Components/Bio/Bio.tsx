import React from "react";
import './Bio.css'

const Bio = () => {
    return (
        <div className="bio-wrapper">
            <div className="bio-box">
                <img className='portrait' src='https://i.ibb.co/Y83Vcjy/IMG-3311.jpg'/>
                <div className='vl'></div>
                <div>
                    <p className='copy'>Grant Beard is a multidisciplinary artist living and working in the Denver area.</p>
                    <a href='https://www.instagram.com/grantxbeard/'>
                            <img className='insta-logo' src='https://i.ibb.co/YkVmf9V/instagram-icon-white-on-black-circle.jpg'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Bio