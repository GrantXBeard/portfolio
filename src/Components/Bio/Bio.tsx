import React from "react";
import './Bio.css'

const Bio = () => {
    return (
        <div className="bio-wrapper">
            <div className="bio-box">
                <img className='portrait' src='https://i.ibb.co/Y83Vcjy/IMG-3311.jpg'/>
                <div className='vl'></div>
                <div>
                    <p className='copy'>    Grant Beard is a multidisciplinary artist living and working in the Denver area. Drawing inspiration from the fast moving modern world, Grant often uses found objects, trash and ephemera as source material for his pieces. Through the use of layering, Grant uses bright colors and geometric shapes to create a sense of depth and movement that draws the viewer in. This invites the viewer to discover hidden meanings and stories within the work. Most of the pieces maintain a haphazard sense of balance and structure that recollect the origins of the material.</p>
                    <a href='https://www.instagram.com/grantxbeard/'>
                            <img className='insta-logo' src='https://i.ibb.co/YkVmf9V/instagram-icon-white-on-black-circle.jpg'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Bio